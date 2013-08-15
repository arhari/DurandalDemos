/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />

class greetings {
   name: KnockoutObservable<string> = ko.observable("World");
   message: KnockoutComputed<string>;

   constructor() {
      this.message = ko.computed(() => {
         return "Hello " + this.name();
      });
   }

   greet() {
      alert(this.message());
   }
}

export = greetings;
