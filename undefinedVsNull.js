// Undefined means --> forget something to define or i can't define the tings 

// if we can't pass any parameter then it also calculates undefined.

let test;
console.log(test);

function add (num1,num2) {
    console.log(num1+num2) ;

    return // it also returns undefined.
}
const result = add(13,82);

console.log(result);  // if we can't return explicitely then it is found the undefined.

const object  = {
    name:'omok',
    phone:'00812'
}

console.log(object.address); // Here we also get undefined

let fun = undefined ;

console.log(fun) ;  //Undefined


let arr = [1,2,3];
console.log(arr[12]); // we also get undefined because there is no eleventh value.


// We can set null where we set that that there is no value set explicitly.If the value doesn't set explicitly then the value is null .