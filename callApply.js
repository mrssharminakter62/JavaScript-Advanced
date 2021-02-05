const normalPerson ={
    firstName: "Akter",
    lastName: "Mim",
    salary: 1200,
    getFullName: function(){
        console.log(this.firstName,this.lastName)
    },
   chargeBill: function(amount){
       this.salary = this.salary - amount;
       return this.salary;
   } 
}
normalPerson.chargeBill(500);
console.log(normalPerson.salary);