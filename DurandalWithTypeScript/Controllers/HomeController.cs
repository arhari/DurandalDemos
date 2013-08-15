using System;
using System.Web.Mvc;

namespace DurandalWithTypeScript.Controllers
{
   public class HomeController : Controller
   {
      public ActionResult Index()
      {
         return View();
      }

      public ActionResult Partial(string viewName)
      {
         return PartialView(viewName.Substring(0, viewName.IndexOf(".", StringComparison.Ordinal)));
      }
   }
}