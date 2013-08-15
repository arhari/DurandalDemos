/// <reference path="Api.d.ts" />
/// <reference path="../../Scripts/typings/Q/Q.d.ts" />
/// <reference path="../../Scripts/typings/amplify/amplify.d.ts" />

import logger = require('services/logger');

class Proxy {
   private _api: IApi;

   constructor(api: IApi, createRequestCallback: (entry: { key: string; value: any; }) => void) {
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

   private sendApiRequest<T>(apiEntry: { key: string }, args?: any): Q.Promise<T> {
      var deferred = Q.defer<T>();
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
   }

   getContracts(): Q.Promise<any> {
      return this.sendApiRequest(this._api.contract_dashboard_search);
   }

   getContract(args: any): Q.Promise<any> {
      return this.sendApiRequest(this._api.contract_summary_get, args);
   }

   getContractFlows(args: number): Q.Promise<any> {
      return this.sendApiRequest(this._api.contract_summary_getFlows, args);
   }

   getTasks(args: { type: string; id: number; }): Q.Promise<any> {
      return this.sendApiRequest(this._api.tasks_get, args);
   }
}

export = Proxy;