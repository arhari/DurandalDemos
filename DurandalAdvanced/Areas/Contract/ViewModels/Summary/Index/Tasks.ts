/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />

import ViewModelBase = require('ViewModelBase');

class Tasks extends ViewModelBase {
   initialize(): Q.Promise<any> {
      return this._load();
   }

   reloadContract(): void {
      this.publishEvent('ReloadContract');
   }

   private _load(): Q.Promise<any> {
      return this.proxy.getTasks({
         type: 'Contract',
         id: <number>this.config.initArgs
      }).then(result => {
            this.model = result;
         });
   }
}

export = Tasks;