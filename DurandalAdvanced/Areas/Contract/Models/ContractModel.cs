using System;

namespace DurandalAdvanced.Areas.Contract.Models
{
   public class ContractModel
   {
      public int Id { get; set; }

      public string Program { get; set; }

      public string Product { get; set; }

      public DateTime CalcDate { get; set; }

      public decimal Amount { get; set; }
   }
}