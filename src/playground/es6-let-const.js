var nameVar = 'Eduardo';
var nameVar = 'Yesenia'; //with var we can redefine, so we could mistakenly do so and not have access to the first one anymore.
console.log('nameVar', nameVar);

let nameLet = 'Eduardo';
nameLet = 'Yesenia'; // with let we cannot redefine, so there is no problem.
console.log('nameLet', nameLet);

const nameConst = 'Eduardo'; // Like with let, we cannot redefine it, but neither can we reassign
console.log('nameConst', nameConst);

//* var variables are function scoped, meaning this works:

var fullName = 'Eduardo Rosas';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); //* This works!

//* const and let variables are block scoped, meaning this doesn't work:

var fullName = 'Eduardo Rosas';

if (fullName) {
    let lastName = fullName.split(' ')[1];
    console.log(lastName);
}

console.log(lastName); //* This doesn't work!
