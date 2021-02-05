class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary
    }
}
const heroPerson = new Person('Hero', 'Balam', 3000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Salam', 4000);
console.log(friendlyPerson);
