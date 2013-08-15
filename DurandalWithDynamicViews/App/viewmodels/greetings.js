define(function() {
   var name = ko.observable("World");

   var message = ko.computed(function() {
      return "Hello " + name();
   });

   var greet = function() {
      alert(message());
   };

   return {
      name: name,
      message: message,
      greet: greet
   };
});