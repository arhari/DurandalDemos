/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />

import Router = require("durandal/plugins/router");

class shell {
   constructor() {
      this.router = Router;
      this.router.mapNav("greetings");
      this.router.mapNav("friends");
   }

   router: any;

   activate() {
      return this.router.activate("greetings");
   }
}

export = shell;
