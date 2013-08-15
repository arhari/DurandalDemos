/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../../../../Scripts/typings/kolite/kolite.d.ts" />

import ViewModelBase = require('ViewModelBase');

class ContractFlows extends ViewModelBase {
   constructor() {
      super();

      this.refreshCommand = ko.asyncCommand({
         execute: callback => {
            this.loadFlows().then(callback);
         },
         canExecute: isExecuting => !isExecuting,
      });
   }

   initialize(): Q.Promise<any> {
      return this.loadFlows();
   }

   loadFlows(): Q.Promise<any> {
      return this.proxy.getContractFlows(this.config.initArgs)
         .then(result => {
            if (!ko.isObservable(this.model)) {
               this.model = ko.observableArray();
            }

            this.model(result);
         });
   }

   refreshCommand: KoliteCommand;
}

export = ContractFlows;