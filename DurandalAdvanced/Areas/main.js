define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router', 'services/logger', 'config'],
   function(app, viewLocator, system, router, logger, config) {
      if (!config) {
         logger.logError('No configuration found.', null, 'main', true);
         return;
      }

      system.debug(config.debug);

      app.start().then(function() {
         if (!Array.prototype.filter) {
            Array.prototype.filter = function(callback, arg) {
               var t = Object(this);
               var len = t.length >>> 0;

               if (typeof callback !== "function") {
                  throw new TypeError();
               }

               var result = [];
               for (var i = 0; i < len; i++) {
                  if (i in t) {
                     var val = t[i]; // in case fun mutates this
                     if (callback.call(arg, val, i, t)) {
                        result.push(val);
                     }
                  }
               }

               return result;
            };
         }

         if (!config.modules || config.modules.length === 0) {
            logger.logDebug('No module configured for the current page.');
            return;
         }

         router.handleInvalidRoute = function(route, params) {
            logger.logError('No route found.', { route: route, params: params }, 'main', true);
         };

         router.useConvention();

         var partialViewUrl = window.rootUrl + config.controllerPath + '/Partial?viewName=_';
         viewLocator.useConvention(config.modulesPath, partialViewUrl);

         var origConvertModuleIdToViewId = viewLocator.convertModuleIdToViewId;
         viewLocator.convertModuleIdToViewId = function(moduleId) {
            if (moduleId.toUpperCase() === 'SHELL') {
               return partialViewUrl + moduleId;
            }

            return origConvertModuleIdToViewId(moduleId);
         };

         app.adaptToDevice();

         app.setRoot('shell', 'entrance');
      });
   });