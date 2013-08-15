/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../../../../Scripts/typings/kolite/kolite.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'ViewModelBase'], function(require, exports, __ViewModelBase__) {
    var ViewModelBase = __ViewModelBase__;

    var ContractFlows = (function (_super) {
        __extends(ContractFlows, _super);
        function ContractFlows() {
            var _this = this;
            _super.call(this);

            this.refreshCommand = ko.asyncCommand({
                execute: function (callback) {
                    _this.loadFlows().then(callback);
                },
                canExecute: function (isExecuting) {
                    return !isExecuting;
                }
            });
        }
        ContractFlows.prototype.initialize = function () {
            return this.loadFlows();
        };

        ContractFlows.prototype.loadFlows = function () {
            var _this = this;
            return this.proxy.getContractFlows(this.config.initArgs).then(function (result) {
                if (!ko.isObservable(_this.model)) {
                    _this.model = ko.observableArray();
                }

                _this.model(result);
            });
        };
        return ContractFlows;
    })(ViewModelBase);

    
    return ContractFlows;
});
//# sourceMappingURL=Flows.js.map
