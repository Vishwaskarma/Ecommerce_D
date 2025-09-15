using System.Data;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using System.IdentityModel.Tokens.Jwt;
using System.Numerics;
using System.Runtime.CompilerServices;
using System.Text;
using System.Transactions;
using Azure.Core;
using ECOMAPP.CommonRepository;
using ECOMAPP.ModelLayer;
using ECOMAPP.ModelLayer.EcommerceAPI.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using static ECOMAPP.MiddleWare.AppEnums;
using static ECOMAPP.ModelLayer.MLAuthentication;
using static ECOMAPP.ModelLayer.MLAuthentication.AuthenticationDTO;

namespace ECOMAPP.DataLayer
{
    public class DLAuthentication : DALBASE
    {
        private IConfiguration _configuration;

        public DLAuthentication(IConfiguration configuration)
        {
            _configuration =
                configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public AuthenticationDTO Login(string EmailId, string PhoneNumber, string Password)
        {
            AuthenticationDTO authenticationDTO = new();
            authenticationDTO.AuthenticationsList =
                new List<AuthenticationDTO.AuthenticationEntites>();
            try
            {
                DataSet dataSet = new DataSet();
                if (
                    (string.IsNullOrEmpty(PhoneNumber) || PhoneNumber == "")
                    && !string.IsNullOrEmpty(EmailId)
                )
                {
                    using (DBAccess Db = new DBAccess())
                    {
                        Db.DBProcedureName = "SP_REGISTRATION";
                        Db.AddParameters("@Action", "LOGINUSEREEMAIL");
                        Db.AddParameters("@Email", EmailId);
                        Db.AddParameters("@Password", ComputeSha256Hash(Password));
                        dataSet = Db.DBExecute();
                        Db.Dispose();
                    }
                }
                else if (
                    (string.IsNullOrEmpty(EmailId) || EmailId == "")
                    && !string.IsNullOrEmpty(PhoneNumber)
                )
                {
                    using (DBAccess Db = new DBAccess())
                    {
                        Db.DBProcedureName = "SP_REGISTRATION";
                        Db.AddParameters("@Action", "LOGINUSERPHONE");
                        Db.AddParameters("@PhoneNumber", PhoneNumber);
                        Db.AddParameters("@Password", ComputeSha256Hash(Password));
                        dataSet = Db.DBExecute();
                        Db.Dispose();
                    }
                }
                else if (!string.IsNullOrEmpty(EmailId) && !string.IsNullOrEmpty(PhoneNumber))
                {
                    using (DBAccess Db = new DBAccess())
                    {
                        Db.DBProcedureName = "SP_REGISTRATION";
                        Db.AddParameters("@Action", "LOGINUSEREEMAIL");
                        Db.AddParameters("@Email", EmailId);
                        Db.AddParameters("@Password", ComputeSha256Hash(Password));
                        dataSet = Db.DBExecute();
                        Db.Dispose();
                    }
                }
                else
                {
                    authenticationDTO.Code = 400;
                    authenticationDTO.Message = "User Not Exists";
                    authenticationDTO.Retval = "Failed";

                    return authenticationDTO;
                }
                if (dataSet != null && dataSet.Tables.Count > 0)
                {
                    DataTable table = dataSet.Tables[0];

                    foreach (DataRow row in table.Rows)
                    {
                        if (Convert.ToString(row["RETVAL"]) == "UserNotVerified")
                        {
                            authenticationDTO.Code = 401;
                            authenticationDTO.Message = "User Not Verified";
                            authenticationDTO.Retval = "Failed";
                            return authenticationDTO;
                        }
                        else
                        {
                            authenticationDTO.AuthenticationsList.Add(
                                new AuthenticationDTO.AuthenticationEntites
                                {
                                    DesignationName = Convert.ToString(row["DesignationName"]),
                                    DesignationId = Convert.ToString(row["DesignationId"]),
                                    UserId = Convert.ToString(row["UserId"]),
                                    FirstName = Convert.ToString(row["FirstName"]),
                                    LastName = Convert.ToString(row["Lastname"]),
                                    Email =
                                        row["Email"] == DBNull.Value
                                            ? null
                                            : Convert.ToString(row["Email"]),
                                    PhoneNumber =
                                        row["PhoneNumber"] == DBNull.Value
                                            ? null
                                            : Convert.ToString(row["PhoneNumber"]),
                                }
                            );
                            authenticationDTO.Code = 200;
                            authenticationDTO.Message = "Success";
                            authenticationDTO.Retval = "Success";
                        }
                    }
                }
                else
                {
                    authenticationDTO.Code = 400;
                    authenticationDTO.Message = "User Not Exists";
                    authenticationDTO.Retval = "Failed";
                }
            }
            catch (Exception ex)
            {
                ErrorLog("Authentication", "Register", ex.ToString());
                authenticationDTO.Code = 400;
                authenticationDTO.Message = "User Not Exists";
                authenticationDTO.Retval = "Failed";
            }
            return authenticationDTO;
        }

        public async Task<AuthenticationDTO> Register(RegistrationData rdata)
        {
            AuthenticationDTO authenticationDTO = new();

            authenticationDTO.AuthenticationsList =
                new List<AuthenticationDTO.AuthenticationEntites>();

            var property = rdata.GetType().GetProperties();

            foreach (var data in property)
            {
                var value = data.GetValue(rdata);

                var type = data.PropertyType;
                bool isNullableValueType = Nullable.GetUnderlyingType(type) != null;
                bool isReferenceType = !type.IsValueType;

                if ((isReferenceType && value == null) || isNullableValueType)
                {
                    continue;
                }

                if (type == typeof(string) && string.IsNullOrWhiteSpace(value as string))
                {
                    authenticationDTO.Code = 400;
                    authenticationDTO.Message = $"Empty {data.Name}";
                    authenticationDTO.Retval = "Failed";
                    return authenticationDTO;
                }
            }

            try
            {
                DataSet ret = new();
                using (DBAccess Db = new())
                {
                    Db.DBProcedureName = "SP_REGISTRATION";
                    Db.AddParameters("@Action", "REGISTERUSER");
                    Db.AddParameters("@Firstname", rdata.Firstname);
                    Db.AddParameters("@Lastname", rdata.Lastname);
                    Db.AddParameters("@Address", rdata.Address);
                    Db.AddParameters("@StateId", rdata.StateId);
                    Db.AddParameters("@CityId", rdata.CityId);
                    Db.AddParameters("@CountryId", rdata.CountryId);
                    Db.AddParameters("@Email", rdata.EmailId);
                    Db.AddParameters("@PhoneNumber", rdata.MobileNumber);
                    Db.AddParameters("@Password", ComputeSha256Hash(rdata.Password));
                    Db.AddParameters("@Address_One", rdata.AddressOne ?? "");
                    Db.AddParameters("@Address_Two", rdata.AddressTwo ?? "");
                    Db.AddParameters("@pincode", rdata.pincode);
                    Db.AddParameters("@pincode1", rdata.pincode1 ?? "");
                    Db.AddParameters("@pincode2", rdata.pincode2 ?? "");

                    ret = Db.DBExecute();
                    Db.Dispose();
                }

                if (ret != null && ret.Tables.Count > 0)
                {
                    DataTable dtbl = ret.Tables[0];
                    foreach (DataRow row in dtbl.Rows)
                    {
                        string retval = row["Retval"]?.ToString() ?? "";
                        if (retval == "SUCCESS")
                        {
                            authenticationDTO.Message = "Success";
                            authenticationDTO.Retval = "UserRegistered";
                            authenticationDTO.Code = 200;
                            string r = ret.Tables[3].Rows[0]["Retval"]?.ToString() ?? "";

                            if (r == "SUCCESS")
                            {
                                var address = new
                                {
                                    alias = ret.Tables[1].Rows[0]["alias"]?.ToString() ?? "",
                                    phone = Convert.ToInt64(ret.Tables[1].Rows[0]["phone"]),
                                    address_line1 = ret.Tables[1]
                                        .Rows[0]["address_line1"]
                                        ?.ToString()
                                    ?? "",
                                    pincode = Convert.ToInt64(ret.Tables[1].Rows[0]["pincode"]),
                                    city = ret.Tables[1].Rows[0]["CityName"]?.ToString() ?? "",
                                    state = ret.Tables[1].Rows[0]["StateName"]?.ToString() ?? "",
                                    country = ret.Tables[1].Rows[0]["CountryName"]?.ToString()
                                    ?? "",
                                };
                            }
                        }
                        else if (retval == "EmailExists")
                        {
                            authenticationDTO.Message = "Failed";
                            authenticationDTO.Retval = "Email Exists";
                            authenticationDTO.Code = 422;
                        }
                        else if (retval == "PhoneExists")
                        {
                            authenticationDTO.Code = (int)DBEnums.Codes.ALREADY_EXISTS;
                            authenticationDTO.Message = DBEnums.Status.FAILURE.ToString();
                            authenticationDTO.Retval = DBEnums.Status.FAILURE.ToString();
                        }
                    }
                }
                else
                {
                    authenticationDTO.Message = "Failed";
                    authenticationDTO.Retval = "FailedToRegister";
                    authenticationDTO.Code = 400;
                }
            }
            catch (Exception ex)
            {
                authenticationDTO.Message = "Failed";
                authenticationDTO.Retval = "FailedToRegister";
                authenticationDTO.Code = 500;
                ErrorLog("register,", "Authentication", ex.ToString());
            }

            return authenticationDTO;
        }

        public CountryStateCityRepository GetAllCountryByCountry()
        {
            CountryStateCityRepository _CountryStateCityRepository = new();
            try
            {
                DataSet _Dataset = new();
                using (DBAccess _DBAccess = new())
                {
                    _DBAccess.DBProcedureName = "[SP_TblCountriesCityState]";
                    _DBAccess.AddParameters("@Action", "SelectCountries");
                    _Dataset = _DBAccess.DBExecute();
                    _DBAccess.Dispose();
                }
                if (_Dataset != null && _Dataset.Tables.Count > 0)
                {
                    _CountryStateCityRepository.CountryEntities = new List<CountryStateCityRepository.CountryEntity>(); 
                    foreach (DataRow row in _Dataset.Tables[0].Rows)
                    {
                        _CountryStateCityRepository.CountryEntities.Add(new CountryStateCityRepository.CountryEntity()
                        {
                            CountryId = row["Id"].ToString() ?? "",
                            CountryName = row["CountryName"].ToString() ?? "",
                            CountryEmoji = row["Emoji"].ToString() ?? ""
                        });
                    }
                    _CountryStateCityRepository.Code = 200;
                    _CountryStateCityRepository.Message = "OK";
                    _CountryStateCityRepository.Retval = "Success";
                }
            }
            catch (Exception ex)
            {
                ErrorLog("GetAllCountryByCountry", "DLAuthentication", ex.ToString());
                _CountryStateCityRepository.Code = 400;
                _CountryStateCityRepository.Message = ex.ToString();
                _CountryStateCityRepository.Retval = "Failed";
            }
            return _CountryStateCityRepository; 
        }

        public CountryStateCityRepository GetAllStateByCountry(string countryId)
        {
            CountryStateCityRepository _CountryStateCityRepository = new();
            try
            {
                DataSet _Dataset = new();
                using (DBAccess _DBAccess = new())
                {
                    _DBAccess.DBProcedureName = "[SP_TblCountriesCityState]";
                    _DBAccess.AddParameters("@Action", "SelectStates"); 
                    _DBAccess.AddParameters("@CountryId", countryId); 
                    _Dataset = _DBAccess.DBExecute();
                    _DBAccess.Dispose();
                }
                if (_Dataset != null && _Dataset.Tables.Count > 0)
                {
                    _CountryStateCityRepository.StateEntities = new List<CountryStateCityRepository.StateEntity>();
                    foreach (DataRow row in _Dataset.Tables[0].Rows)
                    {
                        _CountryStateCityRepository.StateEntities.Add(new CountryStateCityRepository.StateEntity() 
                        {
                            StateId = row["StateId"].ToString() ?? "",
                            StateName = row["StateName"].ToString() ?? ""
                        }); // Fixed: missing semicolon
                    }
                    _CountryStateCityRepository.Code = 200;
                    _CountryStateCityRepository.Message = "OK";
                    _CountryStateCityRepository.Retval = "Success";
                }
            }
            catch (Exception ex)
            {
                ErrorLog("GetAllStateByCountry", "DLAuthentication", ex.ToString()); 
                _CountryStateCityRepository.Code = 400;
                _CountryStateCityRepository.Message = ex.ToString();
                _CountryStateCityRepository.Retval = "Failed";
            }
            return _CountryStateCityRepository;
        }

        public CountryStateCityRepository GetAllCityByState(string stateId)
        {
            CountryStateCityRepository _CountryStateCityRepository = new();
            try
            {
                DataSet _Dataset = new();
                using (DBAccess _DBAccess = new()) 
                {
                    _DBAccess.DBProcedureName = "[SP_TblCountriesCityState]";
                    _DBAccess.AddParameters("@Action", "SelectCity");
                    _DBAccess.AddParameters("@StateId", stateId); 
                    _Dataset = _DBAccess.DBExecute();
                    _DBAccess.Dispose();
                }
                if (_Dataset != null && _Dataset.Tables.Count > 0) 
                {
                    _CountryStateCityRepository.CityEntities = new List<CountryStateCityRepository.CityEntity>();
                    foreach (DataRow row in _Dataset.Tables[0].Rows)
                    {
                        _CountryStateCityRepository.CityEntities.Add(new CountryStateCityRepository.CityEntity()
                        {
                            CityId = row["CityId"].ToString() ?? "",
                            CityName = row["CityName"].ToString() ?? "" 
                        }); 
                    }
                    _CountryStateCityRepository.Code = 200;
                    _CountryStateCityRepository.Message = "OK";
                    _CountryStateCityRepository.Retval = "Success";
                }
            }
            catch (Exception ex)
            {
                ErrorLog("GetAllCityByState", "DLAuthentication", ex.ToString());
                _CountryStateCityRepository.Code = 400;
                _CountryStateCityRepository.Message = ex.ToString();
                _CountryStateCityRepository.Retval = "Failed";
            }
            return _CountryStateCityRepository; 
        }

        public string GenerateRandomNumber()
        {
            Random random = new();
            int number = random.Next(1000, 10000);
            return number.ToString();
        }
    }
}