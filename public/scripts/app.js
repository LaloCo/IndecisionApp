'use strict';

//* arguments object - no longer bound

var add = function add(a, b) {
    console.log(arguments); // this prints arguments even if more than 2 (a, b) are passed
    return a + b;
};
console.log(add(55, 1));

var add2 = function add2(a, b) {
    //! this no longer works
    //// console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

//* this keyword - no longer bound

//? With normal functions

var user = {
    name: 'Eduardo',
    cities: ['Tulancingo', 'Pachuca'],
    printPlacesLived: function printPlacesLived() {
        var that = this; //* requires this workaround

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

//? With arrow functions

var user2 = {
    name: 'Eduardo',
    cities: ['Tulancingo', 'Pachuca'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        }); //* works like this!
    }
};

console.log(user2.printPlacesLived()); //* map has created a new array
console.log(user2.cities); //* and left the original intact

//! Because od this same thing, this other example wouldn't work

var user3 = {
    name: 'Eduardo',
    cities: ['Tulancingo', 'Pachuca'],
    printPlacesLived: function printPlacesLived() {
        undefined.cities.forEach(function (city) {
            //* this is undefined
            console.log(undefined.name + ' has lived in ' + city);
        });
    }
};

user3.printPlacesLived();
