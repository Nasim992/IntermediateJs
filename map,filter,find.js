// In map if we pass a function then it takes three parameters like array index and function 
// map return array 
// filter returns array 
// find returns 1 element 

const numbers = [3,4,5,6,7,8,9];


// for (let i=0;i<numbers.length;i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

const square = element =>element*element;

// const result = numbers.map(function(element){
//     return element*element;
// })

// const result = numbers.map( x => x * x );


// filter check the condition inside the array and returns the value 

// const result = numbers.filter( x=> x > 5 );

// find  if find then return one element check only one element.

const result = numbers.find( x=> x > 5 );

console.log(result);



