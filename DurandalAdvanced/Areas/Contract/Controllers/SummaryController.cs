using System.Web.Mvc;
using DurandalAdvanced.Areas.Contract.Models;
using DurandalAdvanced.Controllers;

namespace DurandalAdvanced.Areas.Contract.Controllers
{
   public class SummaryController : BaseController
   {
      public ActionResult Index(int id)
      {
         return View(id);
      }

      [HttpPost]
      public JsonResult GetContract(int id)
      {
         return Json(ContractDataStore.GetContract(id));
      }
   }
}