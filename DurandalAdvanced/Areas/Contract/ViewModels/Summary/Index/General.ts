/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />

import ViewModelBase = require('ViewModelBase');
import Calculator = require('./Calculator');

class ContractGeneral extends ViewModelBase {
   initialize(): Q.Promise<any> {
      this.calculator = new Calculator();
      return this._loadContract()
         .then(() => {
            this.subscribeEvent('ReloadContract', this._loadContract, this);
         });
   }

   calculator: Calculator;

   manageAsset(): void {
      this.router.navigateTo('#/AssetManager');
   }

   private _loadContract(): Q.Promise<any> {
      return this.proxy.getContract(this.config.initArgs)
         .then(result => {
            this.model = result;
            this.debug('Contract data loaded');
         });
   }

   private _loadAssets() {
   }
}

export = ContractGeneral;