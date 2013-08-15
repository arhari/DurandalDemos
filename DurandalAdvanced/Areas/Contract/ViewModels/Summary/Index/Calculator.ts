/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />

import ViewModelBase = require('ViewModelBase');

class ContractCalculator extends ViewModelBase {
   calculate(): void {
      this.debug('Calculating...');
   }
}

export = ContractCalculator;