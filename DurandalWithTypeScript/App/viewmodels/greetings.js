/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
define(["require", "exports"], function(require, exports) {
    var greetings = (function () {
        function greetings() {
            var _this = this;
            this.name = ko.observable("World");
            this.message = ko.computed(function () {
                return "Hello " + _this.name();
            });
        }
        greetings.prototype.greet = function () {
            alert(this.message());
        };
        return greetings;
    })();

    
    return greetings;
});
//# sourceMappingURL=greetings.js.map
