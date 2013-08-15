/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'ViewModelBase', './Calculator'], function(require, exports, __ViewModelBase__, __Calculator__) {
    var ViewModelBase = __ViewModelBase__;
    var Calculator = __Calculator__;

    var ContractGeneral = (function (_super) {
        __extends(ContractGeneral, _super);
        function ContractGeneral() {
            _super.apply(this, arguments);
        }
        ContractGeneral.prototype.initialize = function () {
            var _this = this;
            this.calculator = new Calculator();
            return this._loadContract().then(function () {
                _this.subscribeEvent('ReloadContract', _this._loadContract, _this);
            });
        };

        ContractGeneral.prototype.manageAsset = function () {
            this.router.navigateTo('#/AssetManager');
        };

        ContractGeneral.prototype._loadContract = function () {
            var _this = this;
            return this.proxy.getContract(this.config.initArgs).then(function (result) {
                _this.model = result;
                _this.debug('Contract data loaded');
            });
        };

        ContractGeneral.prototype._loadAssets = function () {
        };
        return ContractGeneral;
    })(ViewModelBase);

    
    return ContractGeneral;
});
//# sourceMappingURL=General.js.map
