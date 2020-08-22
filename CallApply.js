const normalPerson = {
    firstName  : 'Rahim',
    LastName : 'Uddin',
    salary : 1200,
    getFullName : function() {
        console.log(this.firstName,this.LastName);
    },
    ChargeBill : function(amount) {
           this.salary = this.salary - amount;
           return this.salary; 
    }
}

normalPerson.ChargeBill(100);

console.log(normalPerson.salary);

console.log(normalPerson.LastName);

// bind return a function 
// Bind method is using for to use one method form the object to another method 

const heroPerson = {
    firstName  : 'hero',
    lastName : 'Balam',
    salary : 30000
}

const heroBillCharge = normalPerson.ChargeBill.bind(heroPerson);  // using chargebill method form the normal person to the heroperson. Another object's method is using to my new objects.

heroBillCharge(2000);

console.log(heroPerson.salary);

normalPerson.ChargeBill.call(heroPerson,900); // We can directly call another objects method by call and use it to my new object. 
// If we use apply method then we have to pass the argument's as an array .
// call and apply the difference is if we use call then we have to just call the object and method name and give the other object's inside the parameter in the call()  block
//  For using apply method we have the give the call object first then we have to pass the parameters as an array. 

console.log(heroPerson.salary);