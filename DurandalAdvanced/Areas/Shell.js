define(['durandal/system', 'durandal/plugins/router', 'services/logger', 'config'],
   function(system, router, logger, config) {
      var shell = {
         activate: activate,
         router: router
      };

      return shell;

      function activate() {
         return boot();
      }

      function boot() {
         var routes = [];
         var modules = config.modules;

         for (var i = 0, count = modules.length; i < count; i++) {
            var m = modules[i];
            if (typeof m === 'string') {
               m = { url: m };
            }

            var moduleId = m.id || _.join('/', config.modulesPath, m.url);

            routes.push({
               url: m.url,
               moduleId: moduleId,
               name: m.name || _(m.url).humanize(),
               modal: m.visible === undefined ? false : m.modal,
               visible: (m.visible === undefined || m.visible === null) ? true : m.visible
            });
         }

         router.map(routes);

         logger.logDebug('Shell loaded.', null, system.getModuleId(shell));
         return router.activate(config.startupModule || routes[0].url);
      }
   });