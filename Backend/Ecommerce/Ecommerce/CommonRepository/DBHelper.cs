using ECOMAPP.CommonRepository;

namespace ECOMAPP.CommonRepository
{
    public static class DBHelper
    {
        public static DBReturnData TryExecute(Func<DBReturnData> func)
        {
            DBReturnData dBReturndata = new();
            try
            {
                return func();
            }
            catch (Exception ex)
            {
                     
                dBReturndata.Status = DBEnums.Status.FAILURE;
                dBReturndata.Message = "An error occurred: " + ex.Message;
                dBReturndata.Code = DBEnums.Codes.INTERNAL_SERVER_ERROR;

                return dBReturndata;
            }
        }
    }
}


