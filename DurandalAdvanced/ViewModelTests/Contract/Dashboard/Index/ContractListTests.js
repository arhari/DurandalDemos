require.config({
   baseUrl: '../../../../Areas/'
});

define(['Config', 'durandal/system', 'Contract/ViewModels/Dashboard/Index/ContractList'],
   function(config, system, module) {
      var target = new module();

      module('ContractList Module', {
         setup: function() {
         },
         teardown: function() {
         }
      });

      asyncTest('test activation', function() {
         target.activate().then(function() {
            ok(true);
            start();
         });
      });

      asyncTest('test load contract list', function() {
         target._loadContractList().then(function() {
            ok(target.model && target.model.length > 0);
            start();
         });
      });
   });