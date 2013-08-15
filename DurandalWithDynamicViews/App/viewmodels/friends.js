define(function() {
   return {
      friends: ko.observableArray([
         {
            id: 1,
            name: "David",
            age: 35
         },
         {
            id: 3,
            name: "Simon",
            age: 28
         }
      ])
   };
});