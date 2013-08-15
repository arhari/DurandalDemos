/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />

import ViewModelBase = require('ViewModelBase');

class AssetManager extends ViewModelBase {
   private _isDone = false;

   activate(): Q.Promise<any> {
      this.isModal = true;
      this._isDone = false;
      return super.activate();
   }

   canDeactivate() {
      return this._isDone;
   }

   save(): void {
      this._isDone = true;
      this.router.navigateBack();
   }
}

export = AssetManager;