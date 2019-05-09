//* arguments object - no longer bound

const add = function (a, b) {
    console.log(arguments); // this prints arguments even if more than 2 (a, b) are passed
    return a + b;
};
console.log(add(55, 1));

const add2 = (a, b) => {
    //! this no longer works
    //// console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

//* this keyword - no longer bound

//? With normal functions

const user = {
    name: 'Eduardo',
    cities: ['Tulancingo', 'Pachuca'],
    printPlacesLived: function () {
        const that = this; //* requires this workaround

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

//? With arrow functions

const user2 = {
    name: 'Eduardo',
    cities: ['Tulancingo', 'Pachuca'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); //* works like this!
    }
};

console.log(user2.printPlacesLived()); //* map has created a new array
console.log(user2.cities); //* and left the original intact

//! Because od this same thing, this other example wouldn't work

const user3 = {
    name: 'Eduardo',
    cities: ['Tulancingo', 'Pachuca'],
    printPlacesLived: () => {
        this.cities.forEach((city) => { //* this is undefined
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user3.printPlacesLived();
