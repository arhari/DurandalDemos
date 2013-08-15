/// <reference path="../Scripts/typings/amplify/amplify.d.ts" />
/// <reference path="../Scripts/typings/durandal/durandal.d.ts" />
/// <reference path="../Scripts/typings/q/Q.d.ts" />

import system = require('durandal/system');
import router = require('durandal/plugins/router');
import logger = require('services/logger');
import config = require('config');
import Proxy = require('api/Proxy');

declare var _;

class ViewModelBase {
   private _initialized = false;

   constructor() {
      this.config = config;
      this.router = router;
   }

   activate<boolean>(): Q.Promise<boolean> {
      if (config.debug) {
         var moduleId = _(system.getModuleId(this)).strRightBack('/');
         var moduleName = _(_(moduleId).strRightBack('/')).humanize();

         logger.logDebug(moduleName + ' view activated.', null, moduleId);
      }

      if (!this._initialized) {
         return Q.when(
            this.initialize(),
            () => {
               this._initialized = true;
               return true;
            },
            reason => {
               if (reason) {
                  this.notify(reason, null, 'error');
               }

               return false;
            });
      }

      return Q.fcall(() => true);
   }

   initialize<T>(): Q.Promise<T> {
      return null;
   }

   config: any;

   router: any;

   isModal: boolean = false;

   model: any;

   proxy = <Proxy>config.proxy;


   //============= Event Handling =============

   publishEvent(eventName: string, ...args: any[]): boolean {
      return amplify.publish(eventName, args);
   }

   subscribeEvent(eventName: string, callback: Function): boolean;
   subscribeEvent(eventName: string, callback: Function, context: any): boolean;
   subscribeEvent(eventName: string, callback: Function, context?: any, priority?: number): boolean {
      if (context) {
         return amplify.subscribe(eventName, context, callback, priority);
      }

      if (priority) {
         return amplify.subscribe(eventName, callback, priority);
      }

      return amplify.subscribe(eventName, callback);
   }

   unsubscribeEvent(eventName: string, callback: Function) {
      amplify.unsubscribe(eventName, callback);
   }


   //============= Message Notification =============

   notify(message: string, data: any, type: string): void {
      logger.log(message, data, '', true, type);
   }

   debug(message: string, data?: any): void {
      if (config.debug) {
         logger.logDebug(message, data, system.getModuleId(this));
      }
   }
}

export = ViewModelBase;