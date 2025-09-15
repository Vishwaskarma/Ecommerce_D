
﻿using System.Data;
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
using static ECOMAPP.ModelLayer.MLAuthetication;
using static ECOMAPP.MiddleWare.AppEnums;
using Microsoft.AspNetCore.Authorization;
using static ECOMAPP.ModelLayer.MLAuthetication.AuthenticationDTO;
using System.Threading.Tasks;
using System.Security.Cryptography;
using static ECOMAPP.CommonRepository.DBHelper;


namespace ECOMAPP.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
    {
        public readonly DLAuthentication dlauth;

        public AuthenticationController(DLAuthentication authentication)
        {
            dlauth = authentication

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

                    IConfiguration conf = (new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build());
                    // private string DBConnectionString = conf["ConnectionStrings:DBCON"].ToString();

                    if (conf != null)
                    {
                        var secretKey = conf["AppConstants:JwtSecretKey"]?.ToString();
                        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey ?? ""));
                        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                        if (result.AuthenticationsList != null && result.AuthenticationsList.Count > 0)
                        {

                            var claims = new[]
                            {

                                new Claim("UserId", result.AuthenticationsList[0].UserId),
                                new Claim("DesignationId",result.AuthenticationsList[0].DesignationId),
                                new Claim("DesignationName",result.AuthenticationsList[0].DesignationName),
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
                result.AuthenticationsList = [];
            };

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

                    JsonResult json = Json(JsonConvert.SerializeObject(result));
                    return Json(result);

                }
                else if (result.Code == 1005)
                {
                    result.Code = 1005;
                    result.Message = DBEnums.Codes.ALREADY_EXISTS.ToString();
                    JsonResult json = Json(JsonConvert.SerializeObject(result));
                    return Json(result);
                }
                else
                {
                    result.Code = 400;
                    result.Message = "Failed to Register";
                    JsonResult json = Json(JsonConvert.SerializeObject(result));
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


        public ActonResult<CountryStateCityRepository>GetAllCountryByCountry(){
                MLCountryStateCityRepository _MLCountryStateCityRepository=new();
                DLAuthentication _DLAuthentication=new();
            try{
                _MLCountryStateCityRepository=_DLAuthentication.GetAllCountryByCountry();


            }
            catch(Exception ex){
                 _MLCountryStateCityRepository.Message = "Error: " + ex.Message;
                 _MLCountryStateCityRepository.Code = 500;
                 _MLCountryStateCityRepository.Retval = "Error";

            }
            return ok(CountryStateCityRepository)

        }

         public ActonResult<CountryStateCityRepository>GetAllStateByCountry(){
                MLCountryStateCityRepository _MLCountryStateCityRepository=new();
                DLAuthentication _DLAuthentication=new();
            try{
                _MLCountryStateCityRepository=_DLAuthentication.GetAllStateByCountry();


            }
            catch(Exception ex){
                 _MLCountryStateCityRepository.Message = "Error: " + ex.Message;
                 _MLCountryStateCityRepository.Code = 500;
                 _MLCountryStateCityRepository.Retval = "Error";

            }
            return ok(CountryStateCityRepository)

        }

       public ActonResult<CountryStateCityRepository>GetAllCityByState(){
                MLCountryStateCityRepository _MLCountryStateCityRepository=new();
                DLAuthentication _DLAuthentication=new();
            try{
                _MLCountryStateCityRepository=_DLAuthentication.GetAllCityByState();


            }
            catch(Exception ex){
                 _MLCountryStateCityRepository.Message = "Error: " + ex.Message;
                 _MLCountryStateCityRepository.Code = 500;
                 _MLCountryStateCityRepository.Retval = "Error";

            }
            return ok(CountryStateCityRepository)

        }


    









   
  


 
   







     



    }
}