using System.Web.Mvc;

namespace DurandalAdvanced.Areas.Contract.Controllers
{
   public class ObjectResult<T> : ActionResult
   {
      public T Data { get; set; }

      public ObjectResult(T data)
      {
         Data = data;
      }

      public override void ExecuteResult(ControllerContext context)
      {
         new JsonResult
            {
               Data = Data,
               JsonRequestBehavior = JsonRequestBehavior.AllowGet
            }.ExecuteResult(context);
      }
   }
}