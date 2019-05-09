const square = function (x) {
    return x * x;
}

//const squareArrow = (x) => {
//    return x * x;
//}

const squareArrow = (x) => x * x; // this is the same as before, no explicit return

console.log(squareArrow(8));

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Eduardo Rosas'));
