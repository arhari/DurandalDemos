require.config({
   baseUrl: window.rootUrl + "App",
   paths: {
      "text": "durandal/amd/text"
   }
});

define(["durandal/app", "durandal/system", "durandal/viewLocator", "durandal/plugins/router"],
   function(app, system, viewLocator, router) {
      system.debug(true);

      app.start().then(function() {
         // viewmodels/shell -> /Home/Partial?viewName=_shell
         viewLocator.useConvention("viewmodels/", "/Home/Partial?viewName=_");
         router.useConvention();

         app.setRoot("viewmodels/shell", "entrance");
      });
   });