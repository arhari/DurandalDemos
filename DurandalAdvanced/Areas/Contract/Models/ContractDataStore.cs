using System;
using System.Collections.Generic;
using System.Linq;

namespace DurandalAdvanced.Areas.Contract.Models
{
   public static class ContractDataStore
   {
      private static readonly List<ContractModel> Contracts = new List<ContractModel>
         {
            new ContractModel
               {
                  Id = 1,
                  Program = "Program1",
                  Product = "Loan",
                  CalcDate = DateTime.Today,
                  Amount = 125783.83m
               },
            new ContractModel
               {
                  Id = 2,
                  Program = "Program2",
                  Product = "Lease",
                  CalcDate = DateTime.Today,
                  Amount = 125783.83m
               },
            new ContractModel
               {
                  Id = 3,
                  Program = "Program3",
                  Product = "Mortgate",
                  CalcDate = DateTime.Today,
                  Amount = 125783.83m
               },
         };

      public static IEnumerable<ContractModel> GetAllContracts()
      {
         return Contracts;
      }

      public static ContractModel GetContract(int id)
      {
         return Contracts.SingleOrDefault(c => c.Id == id);
      }
   }
}