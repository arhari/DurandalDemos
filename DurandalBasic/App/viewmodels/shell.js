define(["durandal/plugins/router"], function(router) {
   router.mapNav("greetings");
   router.mapNav("friends");

   return {
      router: router,
      activate: function() {
         return router.activate("greetings");
      }
   };
});