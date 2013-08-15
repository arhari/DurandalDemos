/// <reference path="../../../../../Scripts/typings/Q/Q.d.ts" />
/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'ViewModelBase'], function(require, exports, __ViewModelBase__) {
    var ViewModelBase = __ViewModelBase__;

    var ContractList = (function (_super) {
        __extends(ContractList, _super);
        function ContractList() {
            _super.apply(this, arguments);
        }
        ContractList.prototype.initialize = function () {
            return this._loadContractList();
        };

        ContractList.prototype._loadContractList = function () {
            var _this = this;
            return this.proxy.getContracts().then(function (result) {
                _this.model = result;
                _this.debug('Contract list data loaded.');
            }).fail(function (reason) {
                alert(reason);
            });
        };
        return ContractList;
    })(ViewModelBase);

    
    return ContractList;
});
//# sourceMappingURL=ContractList.js.map
