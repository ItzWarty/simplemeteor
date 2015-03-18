/// <reference path="../.typescript/definitions/meteor.d.ts"/>
/// <reference path="../.typescript/definitions/node.d.ts"/>
/// <reference path="./foo/Car.ts"/>
Meteor.startup(function () {
    var a = new Car(10);
    console.log(Car);
});
