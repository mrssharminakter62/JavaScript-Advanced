// // Object Method proparty===================

// const normalPerson ={
//     firstName: "Akter",
//     lastName: "Mim",
//     salary: 1200,
//     getFullName: function(){
//         console.log(this.firstName,this.lastName)
//     },
//    chargeBill: function(amount){
//        this.salary = this.salary - amount;
//        return this.salary;
//    } 
// }
// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);

// Object use bind =================

// const normalPerson ={
//     firstName: "Akter",
//     lastName: "Mim",
//     salary: 1200,
//     getFullName: function(){
//         console.log(this.firstName,this.lastName)
//     },
//    chargeBill: function(amount){
//        console.log(this);
//        this.salary = this.salary - amount;
//        return this.salary;
//    } 
// }

// const heroPerson = {
//     firstName: 'Hero',
//     lastName: 'Balam',
//     salary: 22000
// }
// const highPerson = {
//     firstName: 'Hero',
//     lastName: 'Salam',
//     salary: 22000
// }
// const friendlyPerson = {
//     firstName: 'Hero',
//     lastName: 'Golam',
//     salary: 22000
// }
// const highChargeBill = normalPerson.chargeBill.bind(highPerson);
// highChargeBill(4000);
// console.log(highPerson.salary)

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(550);
// console.log(heroPerson.salary);

// const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendChargeBill(700);
// console.log(friendlyPerson.salary)

// Difference between bind, call and apply============

const normalPerson ={
    firstName: "Akter",
    lastName: "Mim",
    salary: 1200,
    getFullName: function(){
        console.log(this.firstName,this.lastName)
    },
   chargeBill: function(amount, tips, tax){
       console.log(this);
       this.salary = this.salary - amount - tips - tax;
       return this.salary;
   } 
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 22000
}
const highPerson = {
    firstName: 'Hero',
    lastName: 'Salam',
    salary: 22000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 22000
}

// normalPerson.chargeBill.call(heroPerson, 900, 100, 20);
// console.log(heroPerson.salary)
// normalPerson.chargeBill.call(highPerson, 900, 100, 10);
// console.log(highPerson)
// normalPerson.chargeBill.call(friendlyPerson, 2000, 500, 200);
// console.log(friendlyPerson.salary)
// console.log(highPerson)
// normalPerson.chargeBill.call(normalPerson, 100, 30, 100);
// console.log(normalPerson.salary);

// apply=====================

normalPerson.chargeBill.apply(heroPerson, [300, 200, 40]);
 normalPerson.chargeBill.apply(heroPerson, [400, 100, 50]);
console.log(heroPerson.salary)