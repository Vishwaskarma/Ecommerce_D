using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.Json;
using ECOMAPP.CommonRepository;
using ECOMAPP.DataLayer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using static ECOMAPP.ModelLayer.MLAuthentication;
using static ECOMAPP.MiddleWare.AppEnums;
using Microsoft.AspNetCore.Authorization;
using static ECOMAPP.ModelLayer.MLAuthentication.AuthenticationDTO;
using System.Threading.Tasks;
using System.Security.Cryptography;
using static ECOMAPP.CommonRepository.DBHelper;
using ECOMAPP.ModelLayer;

namespace ECOMAPP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
    {
        public readonly DLAuthentication dlauth;
        private readonly IConfiguration _configuration;

        public AuthenticationController(DLAuthentication authentication, IConfiguration configuration)
        {
            dlauth = authentication;
            _configuration = configuration; 
        }

        DALBASE dalbase = new();

        [Route("Login")]
        [HttpPost]
        public JsonResult Login([FromBody] MlLoginRequest loginRequest)
        {
            AuthenticationDTO result = new AuthenticationDTO();
            try
            {
                result = dlauth.Login(loginRequest.EmailId ?? "", loginRequest.PhoneNumber ?? "", loginRequest.Password ?? "");

                if (result.Code == 200)
                {
                    IConfiguration conf = _configuration; 

                    if (conf != null)
                    {
                        var secretKey = conf["AppConstants:JwtSecretKey"]?.ToString();
                        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey ?? ""));
                        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                        if (result.AuthenticationsList != null && result.AuthenticationsList.Count > 0)
                        {
                            var claims = new[]
                            {
                                new Claim("UserId", result.AuthenticationsList[0].UserId ?? ""),
                                new Claim("DesignationId", result.AuthenticationsList[0].DesignationId ?? ""),
                                new Claim("DesignationName", result.AuthenticationsList[0].DesignationName ?? ""),
                            };

                            var token = new JwtSecurityToken(
                                 claims: claims,
                                 expires: DateTime.Now.AddDays(14),
                                 signingCredentials: credentials
                            );

                            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                            result.Token = tokenString;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                DALBASE err = new();
                err.ErrorLog("Authentication", "Login", ex.ToString());
                result.Code = 500;
                result.Message = "Internal Server Error";
                result.Retval = "Failed";
                result.AuthenticationsList = new List<AuthenticationEntites>();
            }

            return Json(result);
        }

        [Route("Register")]
        [HttpPost]
        public async Task<JsonResult> Register([FromBody] RegistrationData rdata)
        {
            try
            {
                AuthenticationDTO result = new();

                result = await dlauth.Register(rdata);

                if (result.Code == 200)
                {
                    return Json(result);
                }
                else if (result.Code == 1005)
                {
                    result.Code = 1005;
                    result.Message = DBEnums.Codes.ALREADY_EXISTS.ToString();
                    return Json(result);
                }
                else
                {
                    result.Code = 400;
                    result.Message = "Failed to Register";
                    return Json(result);
                }
            }
            catch (Exception ex)
            {
                DALBASE dALBASE = new();
                dALBASE.ErrorLog("Register", "AuthController", ex.ToString());
                AuthenticationDTO res = new AuthenticationDTO
                {
                    Code = 500,
                    Message = "Internal Server Error"
                };

                return Json(res);
            }
        }

        [Route("GetAllCountryByCountry")] 
        [HttpGet]
        public ActionResult<CountryStateCityRepository> GetAllCountryByCountry() 
        {
            CountryStateCityRepository _CountryStateCityRepository = new(); 
            try
            {
                _CountryStateCityRepository = dlauth.GetAllCountryByCountry(); 
            }
            catch (Exception ex)
            {
                _CountryStateCityRepository.Message = "Error: " + ex.Message;
                _CountryStateCityRepository.Code = 500;
                _CountryStateCityRepository.Retval = "Error";
            }
            return Ok(_CountryStateCityRepository); 
        }

        [Route("GetAllStateByCountry/{countryId}")] 
        [HttpGet]
        public ActionResult<CountryStateCityRepository> GetAllStateByCountry(string countryId) 
        {
            CountryStateCityRepository _CountryStateCityRepository = new(); 
            try
            {
                _CountryStateCityRepository = dlauth.GetAllStateByCountry(countryId); 
            }
            catch (Exception ex)
            {
                _CountryStateCityRepository.Message = "Error: " + ex.Message;
                _CountryStateCityRepository.Code = 500;
                _CountryStateCityRepository.Retval = "Error";
            }
            return Ok(_CountryStateCityRepository); 
        }

        [Route("GetAllCityByState/{stateId}")] 
        [HttpGet]
        public ActionResult<CountryStateCityRepository> GetAllCityByState(string stateId) 
        {
            CountryStateCityRepository _CountryStateCityRepository = new(); 
            try
            {
                _CountryStateCityRepository = dlauth.GetAllCityByState(stateId); 
            }
            catch (Exception ex)
            {
                _CountryStateCityRepository.Message = "Error: " + ex.Message;
                _CountryStateCityRepository.Code = 500;
                _CountryStateCityRepository.Retval = "Error";
            }
            return Ok(_CountryStateCityRepository); 
        }
    }
}