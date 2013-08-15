/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'ViewModelBase'], function(require, exports, __ViewModelBase__) {
    var ViewModelBase = __ViewModelBase__;

    var ContractCalculator = (function (_super) {
        __extends(ContractCalculator, _super);
        function ContractCalculator() {
            _super.apply(this, arguments);
        }
        ContractCalculator.prototype.calculate = function () {
            this.debug('Calculating...');
        };
        return ContractCalculator;
    })(ViewModelBase);

    
    return ContractCalculator;
});
//# sourceMappingURL=Calculator.js.map
