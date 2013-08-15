using System.Collections.Generic;
using System.Web.Mvc;
using DurandalAdvanced.Areas.Contract.Models;
using DurandalAdvanced.Controllers;

namespace DurandalAdvanced.Areas.Contract.Controllers
{
   public class DashboardController : BaseController
   {
      public ActionResult Index()
      {
         return View();
      }

      [HttpPost]
      public ObjectResult<IEnumerable<ContractModel>> GetContracts()
      {
         return new ObjectResult<IEnumerable<ContractModel>>(ContractDataStore.GetAllContracts());
      }
   }
}