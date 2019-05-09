'use strict';

var square = function square(x) {
    return x * x;
};

//const squareArrow = (x) => {
//    return x * x;
//}

var squareArrow = function squareArrow(x) {
    return x * x;
}; // this is the same as before, no explicit return

console.log(squareArrow(8));

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

console.log(getFirstName('Eduardo Rosas'));
