namespace ECOMAPP.ModelLayer
{



    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
   

    namespace EcommerceAPI.DTO
    {
        public class EcommerceCategoryDTO
        {

            public int Code { get; set; }
            public string Message { get; set; }
            public string Retval { get; set; }



            public class Category
            {

                public int Category_id { get; set; }
                public string Category_Name { get; set; }
                public string CreationDate { get; set; }
                public string Image { get; set; }
                public int Priority { get; set; }
                public string Status { get; set; }

            }
            
            public class DemoDto
            {
                public class DemoDTOCHild
                {
                    public string prop1 { get; set; }
                    public string prop2 { get; set; }
                    public string prop3 { get; set; }
                    

                }
            }
            
            public List<EcommerceCategoryDTO.Category> CategoryList { get; set; }
            public List<EcommerceCategoryDTO.DemoDto.DemoDTOCHild> catList { get; set; }


        }
    }


    public class SellerDocument
    {
        public string? userId { get; set; }
        public string? documentName { get; set; }
        public string? document { get; set; }
    }
    
    public class MLAuthetication
    {


        public class RegistrationData
        {
            public string Firstname { get; set; } = string.Empty;
            public string Lastname { get; set; } = string.Empty;
            public string Address { get; set; } = string.Empty;
            public string StateId { get; set; } = string.Empty;
            public string CityId { get; set; } = string.Empty;
            public string CountryId { get; set; } = string.Empty;
            public string MobileNumber { get; set; } = string.Empty;
            public string EmailId { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;

            public string? AddressOne { get; set; }
            public string? AddressTwo { get; set; }

            public string pincode { get; set; }
            public string? pincode1 { get; set; }
            public string? pincode2 { get; set; }



            public int? selectedAddressIndex { get; set; }

            public string? SellerPackage { get; set; }
            public string? SellerType { get; set; }
            public string? SellerImage { get; set; }
            public string? ShopName { get; set; }
            public string? GSTNumber { get; set; }
            public string? ShopPincode { get; set; }
            public string? ShopCity { get; set; }
            public string? ShopState { get; set; }
            public string? ShopAddress { get; set; }
            public string? ShopAbout { get; set; }
            public string? ShopLogo { get; set; }
            public string? ShopBanner { get; set; }
            public string? DocumnetType { get; set; }
            public string? SellerDocument { get; set; }
            public Dictionary<string, string>? SellerDocuments { get; set; }
            public bool? isApproved { get; set; }


        }


        public class User
        {
            public string Firstname { get; set; } = string.Empty;
            public string Lastname { get; set; } = string.Empty;
            public string Address { get; set; } = string.Empty;
            public string StateId { get; set; } = string.Empty;
            public string CityId { get; set; } = string.Empty;
            public string CountryId { get; set; } = string.Empty;



        }

        public class UpdateUserProfile
        {
            public string FirstName { get; set; } = string.Empty;

            public string LastName { get; set; } = string.Empty;
            public string ProfilePath { get; set; } = string.Empty;
            
        }

        public class MlLoginRequest
        {

            public string? EmailId { get; set; } 
            public string? PhoneNumber { get; set; }
            public string? Password { get; set; }
        
        }

        public class MlForgetPasswordOtpValidate
        {
            public string Email { get; set; } = string.Empty;
            public string OTP { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
        }

        public class MlVerifyEmail
        {
            public string? Email { get; set; }
            public string? Otp { get; set; }
        }

        public class MlVerifyPhone
        {
            public string? PhoneNumber { get; set; }
                
            public string? Otp { get; set; }

        }

        public class MLGetAllUser
        {
           public string PageNumber { get; set; }

            public string? SearchText { get; set; }

            public string? Designation { get; set; }

        }

        public class MlSendOtpEmail
        {
            public string? Email { get; set; }
        }

        public class AuthenticationDTO
        {

            public int? Code { get; set; }
            public string? Message { get; set; } = null;
            public string? Retval { get; set; } = null;

            public string? Token { get; set; }

            public class AuthenticationEntites
            {

                public string? Desgination { get; set; } = null;
                public string? DesignationName { get; set; } = null;
                public string? DesignationId { get; set; } = null;
                public string? UserId { get; set; } = null;
                public string? FirstName { get; set; } = null;
                public string? LastName { get; set; } = null;
                public string? Status { get; set; } = null;
                public string? Email { get; set; } = null;
                public string? PhoneNumber { get; set; } = null;


            }

            public class UserProfileEntites
            {
                public string? ProfileImage { get; set; } = null;
                public string? EmailId { get; set; } = null;
                public string? JoiningDate { get; set; } = null;
                public string? FirstName { get; set; } = null;
                public string? LastName { get; set; } = null;
                public string? DesignationName { get; set; } = null;
                public string? DesignationDescription { get; set; } = null;
                public string? CountryName { get; set; } = null;
                public string? EmojiUTF { get; set; } = null;
                public string? CurrencyName { get; set; } = null;
                public string? StateName { get; set; } = null;
                public string? CityName { get; set; } = null;
                public string? PhoneNumber { get; set; } = null;

                public string? Address { get; set; }
                public string? Address_One { get; set; }
                public string? Address_Two { get; set; }
                public string? Address_Three { get; set; }
                public string? Address_Four { get; set; }
  
                

                public string? pincode { get; set; }
                public string? pincode1 { get; set; }
                public string? pincode2 { get; set; }
                public string? pincode3 { get; set; }
                public string? pincode4 { get; set; }

                public int? selectedAddressIndex { get; set; }

                public string? documentType { get; set; }
                public string? sellerDocument { get; set; }
                public string? sellerPackage { get; set; }
                public string? sellerType { get; set; }
                public string? shopAbout { get; set; }
                public string? shopLogo { get; set; }
                public bool? paymentStatus { get; set;}
                public string? Amount { get; set; } 
                public bool? isApproved { get; set; }
                public string? UserId { get; set; }

                public string? SellerId { get; set; }
            }

            public class UpdateAddressIndex
            {
                public int? SelectedIndex { get; set; }

            }


            public class AddNewAddressPincode
            {
                public string Address { get; set; } = string.Empty;
                public string Pincode { get; set; } = string.Empty;
                public int SelectedAddressBlock { get; set; }

            }

            public class EditaddressPincode
            {
                public int? SelectedIndex { get; set; }
                public string Address { get; set; } = string.Empty;
                public string Pincode { get; set; } = string.Empty;

            }

            public class GetFCM
            {
                public string FCMToken { get; set; }
            }
            public class INSERTSHIPMENTADDRESS
            {
                public string Action {get;set;} 
                public string? UserId {get;set;} 
                public string? alias {get;set;} 
                public string? phone {get;set;} 
                public string? address_line1 {get;set;} 
                public string? address_line2 {get;set;} // = 'warchi wadi Park',
                public int? pincode {get;set;} 
                public int? city {get;set;} 
                public int? state {get;set;} 
                public int? country { get; set; }
                public int? addressBlockId { get; set; }


            }

            public class ShipmentAddressEntites
            {
                public int Id { get; set; }
                public string UserId { get; set; } = string.Empty;
                public string Alias { get; set; } = string.Empty;
                public string Phone { get; set; } = string.Empty;
                public string? AddressLine1 { get; set; }
                public string? AddressLine2 { get; set; }
                public int? Pincode { get; set; }
                public string? City { get; set; }
                public string? State { get; set; }
                public string? Country { get; set; }
                public string? CityId { get; set; }
                public string? StateId { get; set; }
                public string? CountryId { get; set; }
                public int? IsPrimary { get; set; }
                public DateTime? CreationDate { get; set; }
                public DateTime? UpdationDate { get; set; }
            }

            public List<ShipmentAddressEntites>? shipmentAddressEntites { get; set; } 


            public List<AuthenticationDTO.UserProfileEntites>? UserProfilesEntity { get; set; }
            public List<AuthenticationDTO.AuthenticationEntites>? AuthenticationsList { get; set; }

        }


        public class MlSeller
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string PhoneNumber { get; set; }
            public string SellerPackage { get; set; }
            public string SellerType { get; set; }
            public string SellerImage { get; set; }
            public string Email { get; set; }
            public string password { get; set; }
            public string ShopName { get; set; }
            public string GSTNumber { get; set; }
            public string ShopPincode { get; set; }
            public string ShopCity { get; set; }
            public string ShopState { get; set; }
            public string ShopAddress { get; set; }
            public string ShopAbout { get; set; }
            public string ShopLogo { get; set; }
            public string ShopBanner { get; set; }
            public string DocumnetType { get; set; }
            public string SellerDocument { get; set; }
            public bool? isApproved { get; set; }


        }


    }
}
