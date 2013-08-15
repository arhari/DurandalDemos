using System.Web.Mvc;

namespace DurandalBasic.Controllers
{
   public class HomeController : Controller
   {
      public ActionResult Index()
      {
         return View();
      }
   }
}