
class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }

    getGreeting() {
        return `Hello, I am ${this.name}!`;
    }
}

const me = new Person('Eduardo Rosas');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
