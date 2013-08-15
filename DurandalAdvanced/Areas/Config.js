require.config({
   paths: {
      'text': 'durandal/amd/text'
   },
   waitSeconds: 0   //for debugging
});


define(['durandal/system', 'pageConfig', 'api/Proxy', 'api/WebApi', 'api/MockApi'],
   function(system, pageConfig, proxy, webApi, mockApi) {
      var debug = true;
      var viewModelDir = 'ViewModels';
      var antiForgeryTokenId = '__RequestVerificationToken';

      var useMock = true;
      $.mockJSON.random = true;

      _.mixin(_.string.exports());

      toastr.options = {
         positionClass: 'toast-bottom-right', //'toast-bottom-full-width',
         timeOut: 5000,
         extendedTimeOut: 5000
      };

      amplify.subscribe('request.before.ajax', function(resource, settings, ajaxSettings, xhr) {
         xhr.setRequestHeader(antiForgeryTokenId, getAntiForgeryToken());
      });

      system.defer = function(action) {
         var deferred = Q.defer();

         action.call(deferred, deferred);
         var promise = deferred.promise;

         deferred.promise = function() {
            return promise;
         };

         return deferred;
      };

      if (pageConfig) {
         var modulesPath = getModulesPath(pageConfig.url);
         $.extend(pageConfig,
            {
               modulesPath: modulesPath,
               controllerPath: _(modulesPath.replace('/' + viewModelDir + '/', '/')).strLeftBack('/')
            });
      }

      return $.extend({}, pageConfig,
         {
            debug: debug,
            proxy: createProxyInstance(),
         });


      //#region Private Helper Functions

      function getAntiForgeryTokenName(appPath, tokenNameParam) {
         appPath = (appPath && typeof appPath === 'string') ? '_' + appPath.toString() : '';

         //The name attribute is either __RequestVerificationToken or __RequestVerificationToken_{appPath}.
         return tokenNameParam != null ? tokenNameParam + appPath : antiForgeryTokenId + appPath;
      }

      function getAntiForgeryToken(tokenWindow, appPath, tokenNameParam) {
         tokenWindow = (tokenWindow && typeof tokenWindow === typeof window) ? tokenWindow : window;

         var tokenName = getAntiForgeryTokenName(appPath, tokenNameParam);
         var tokenElement = $('input:hidden[name="' + tokenName + '"]', tokenWindow.document);

         return tokenElement.length > 0 ? { name: tokenName, value: tokenElement.val() } : null;
      }

      function getModulesPath(pageUrl) {
         var url = _(pageUrl).strLeftBack('#');
         if (_(url).endsWith('.html') || _(url).endsWith('.htm')) {
            url = _(url).strLeftBack('/');
         }

         var urlParts = _(url).words('/').reverse();
         var actionName = urlParts[0];
         var controllerName = urlParts[1];
         var areaName = '';
         if (urlParts.length > 2) {
            areaName = _(urlParts[2]).strLeft('/');
         }

         var result = _.join('/', viewModelDir, controllerName, actionName);
         if (areaName) {
            result = _.join('/', areaName, result);
         }

         return result;
      }

      function createProxyInstance() {
         if (!proxy) {
            return null;
         }

         var api;
         var createRequestCallback;

         if (useMock) {
            api = new mockApi();
            createRequestCallback = function(entry) {
               amplify.request.define(entry.key, function(settings) {
                  settings.success($['mockJSON'].generateFromTemplate(entry.value).data);
               });
            };
         } else {
            api = new webApi();
            createRequestCallback = function(entry) {
               amplify.request.define(entry.key, 'ajax',
                  {
                     url: window.rootUrl + entry.value,
                     dataType: 'json',
                     type: 'POST'
                  });
            };
         }

         return new proxy(api, createRequestCallback);
      }

      //#endregion
   });