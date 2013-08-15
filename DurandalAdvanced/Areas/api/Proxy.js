/// <reference path="Api.d.ts" />
/// <reference path="../../Scripts/typings/Q/Q.d.ts" />
/// <reference path="../../Scripts/typings/amplify/amplify.d.ts" />
define(["require", "exports", 'services/logger'], function(require, exports, __logger__) {
    var logger = __logger__;

    var Proxy = (function () {
        function Proxy(api, createRequestCallback) {
            this._api = api;

            for (var prop in this._api) {
                var entry = {
                    key: prop,
                    value: this._api[prop]
                };

                createRequestCallback(entry);
                this._api[prop] = entry;
            }
        }
        Proxy.prototype.sendApiRequest = function (apiEntry, args) {
            var deferred = Q.defer();
            amplify.request({
                resourceId: apiEntry.key,
                data: args || {},
                success: deferred.resolve,
                error: function onRequestError(reason) {
                    logger.logError("Request failed: " + apiEntry.key + ", " + reason, apiEntry, null, true);
                    deferred.reject(reason);
                }
            });

            return deferred.promise;
        };

        Proxy.prototype.getContracts = function () {
            return this.sendApiRequest(this._api.contract_dashboard_search);
        };

        Proxy.prototype.getContract = function (args) {
            return this.sendApiRequest(this._api.contract_summary_get, args);
        };

        Proxy.prototype.getContractFlows = function (args) {
            return this.sendApiRequest(this._api.contract_summary_getFlows, args);
        };

        Proxy.prototype.getTasks = function (args) {
            return this.sendApiRequest(this._api.tasks_get, args);
        };
        return Proxy;
    })();

    
    return Proxy;
});
//# sourceMappingURL=Proxy.js.map
