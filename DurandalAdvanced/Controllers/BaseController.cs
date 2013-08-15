using System.Web.Mvc;

namespace DurandalAdvanced.Controllers
{
   public class BaseController : Controller
   {
      public ActionResult Partial(string viewName)
      {
         return PartialView(viewName.Replace(".html", "").Replace("_/", "_"), null);
      }
   }
}