// If we wants to convert js object to string then we need JSON.stringify
// If we want to convert any string to object then we need json.parse 

const user = {
    id:255,name:"Nasim"
};
const userJson = JSON.stringify(user) ;  // convert object to string 
console.log(userJson);

console.log(JSON.parse(userJson)); // convert string to object 


// main task --> When we load the data from the server then all the data is coming as a string .Then we have to convert the string to object to works with data.

// and 

// we can also sent data to the server as a backend then we use JSON.stringify to make the data as a string. we convert object to string to sent data to the server. 