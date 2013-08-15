/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'ViewModelBase'], function(require, exports, __ViewModelBase__) {
    var ViewModelBase = __ViewModelBase__;

    var AssetManager = (function (_super) {
        __extends(AssetManager, _super);
        function AssetManager() {
            _super.apply(this, arguments);
            this._isDone = false;
        }
        AssetManager.prototype.activate = function () {
            this.isModal = true;
            this._isDone = false;
            return _super.prototype.activate.call(this);
        };

        AssetManager.prototype.canDeactivate = function () {
            return this._isDone;
        };

        AssetManager.prototype.save = function () {
            this._isDone = true;
            this.router.navigateBack();
        };
        return AssetManager;
    })(ViewModelBase);

    
    return AssetManager;
});
//# sourceMappingURL=AssetManager.js.map
