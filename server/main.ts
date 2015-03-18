/// <reference path="../.typescript/definitions/meteor.d.ts"/>
/// <reference path="../.typescript/definitions/node.d.ts"/>
/// <reference path="./foo/Car.ts"/>

Meteor.startup(() => {
   var a: Car = new Car(10);
   console.log(Car);
});

