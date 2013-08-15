/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
define(["require", "exports", "durandal/plugins/router"], function(require, exports, __Router__) {
    var Router = __Router__;

    var shell = (function () {
        function shell() {
            this.router = Router;
            this.router.mapNav("greetings");
            this.router.mapNav("friends");
        }
        shell.prototype.activate = function () {
            return this.router.activate("greetings");
        };
        return shell;
    })();

    
    return shell;
});
//# sourceMappingURL=shell.js.map
