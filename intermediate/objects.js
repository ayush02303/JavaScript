
 // object literal
const data ={
    name : "Ayush",
    age : 89,
    number : 2332323,
    gender : "Male",
    group : "rather not say"
}
console.log(data.group) 
console.log(data.name)
data.name = "Saurabh"
console.log(data); 

// preventing name overridiing
Object.freeze(data.name)
data.name = "Ismael"
console.log(data); 