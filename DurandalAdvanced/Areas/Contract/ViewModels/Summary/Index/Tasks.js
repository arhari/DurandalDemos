/// <reference path="../../../../../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'ViewModelBase'], function(require, exports, __ViewModelBase__) {
    var ViewModelBase = __ViewModelBase__;

    var Tasks = (function (_super) {
        __extends(Tasks, _super);
        function Tasks() {
            _super.apply(this, arguments);
        }
        Tasks.prototype.initialize = function () {
            return this._load();
        };

        Tasks.prototype.reloadContract = function () {
            this.publishEvent('ReloadContract');
        };

        Tasks.prototype._load = function () {
            var _this = this;
            return this.proxy.getTasks({
                type: 'Contract',
                id: this.config.initArgs
            }).then(function (result) {
                _this.model = result;
            });
        };
        return Tasks;
    })(ViewModelBase);

    
    return Tasks;
});
//# sourceMappingURL=Tasks.js.map
