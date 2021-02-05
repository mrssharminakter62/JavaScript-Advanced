// Object Method proparty===================

const normalPerson ={
    firstName: "Akter",
    lastName: "Mim",
    salary: 1200,
    getFullName: function(){
        console.log(this.firstName,this.lastName)
    },
   chargeBill: function(amount){
       console.log(this);
       this.salary = this.salary - amount;
       return this.salary;
   } 
}
normalPerson.chargeBill(500);
console.log(normalPerson.salary);

// Object use bind =================

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
const highChargeBill = normalPerson.chargeBill.bind(highPerson);
highChargeBill(4000);
console.log(highPerson.salary)

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(550);
console.log(heroPerson.salary);

const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendChargeBill(700);
console.log(friendlyPerson.salary)
