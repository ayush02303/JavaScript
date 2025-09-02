// demonstrating maps and filters in javaScript 

// way 1
const arr = [ 12,23,45,56,67]
 
function double(x){ 
    return x*x
} 

function triple( x){
    return x*x*x
}


const ans = arr.map( triple )
console.log("demonstrating maps using normal function")
console.log(ans)

// using arrow function 

const ans2 = arr.map( (x)=> x+2)
console.log( "the same ,using arrow function this time ")
console.log( ans2)

// filter method 
// basically filters out the parameters that pass the certain condition provided under the callback
const numbers = [12 ,23,45,567,78 , 22,44,77]

// using arrow function on a filter method
const ans3 = numbers.filter( x=> x%2 == 0)
console.log(" filter method using arrow function")
console.log( ans3)

// will work using normal function as well 
function filternames( x){
    return x%2 == 0
}
const ans4 = numbers.filter( filternames)
console.log( "using normal function")
console.log( ans4)

