/// <reference path="../Scripts/typings/amplify/amplify.d.ts" />
/// <reference path="../Scripts/typings/durandal/durandal.d.ts" />
/// <reference path="../Scripts/typings/q/Q.d.ts" />
define(["require", "exports", 'durandal/system', 'durandal/plugins/router', 'services/logger', 'config', 'api/Proxy'], function(require, exports, __system__, __router__, __logger__, __config__, __Proxy__) {
    var system = __system__;
    var router = __router__;
    var logger = __logger__;
    var config = __config__;
    var Proxy = __Proxy__;

    var ViewModelBase = (function () {
        function ViewModelBase() {
            this._initialized = false;
            this.isModal = false;
            this.proxy = config.proxy;
            this.config = config;
            this.router = router;
        }
        ViewModelBase.prototype.activate = function () {
            var _this = this;
            if (config.debug) {
                var moduleId = _(system.getModuleId(this)).strRightBack('/');
                var moduleName = _(_(moduleId).strRightBack('/')).humanize();

                logger.logDebug(moduleName + ' view activated.', null, moduleId);
            }

            if (!this._initialized) {
                return Q.when(this.initialize(), function () {
                    _this._initialized = true;
                    return true;
                }, function (reason) {
                    if (reason) {
                        _this.notify(reason, null, 'error');
                    }

                    return false;
                });
            }

            return Q.fcall(function () {
                return true;
            });
        };

        ViewModelBase.prototype.initialize = function () {
            return null;
        };

        //============= Event Handling =============
        ViewModelBase.prototype.publishEvent = function (eventName) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            return amplify.publish(eventName, args);
        };

        ViewModelBase.prototype.subscribeEvent = function (eventName, callback, context, priority) {
            if (context) {
                return amplify.subscribe(eventName, context, callback, priority);
            }

            if (priority) {
                return amplify.subscribe(eventName, callback, priority);
            }

            return amplify.subscribe(eventName, callback);
        };

        ViewModelBase.prototype.unsubscribeEvent = function (eventName, callback) {
            amplify.unsubscribe(eventName, callback);
        };

        //============= Message Notification =============
        ViewModelBase.prototype.notify = function (message, data, type) {
            logger.log(message, data, '', true, type);
        };

        ViewModelBase.prototype.debug = function (message, data) {
            if (config.debug) {
                logger.logDebug(message, data, system.getModuleId(this));
            }
        };
        return ViewModelBase;
    })();

    
    return ViewModelBase;
});
//# sourceMappingURL=ViewModelBase.js.map
