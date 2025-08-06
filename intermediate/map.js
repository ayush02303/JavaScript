
// working with numeric arrays 

let numbers = [1,2,3,4,5]; 

let result = numbers.map( cube )
console.log(result); 

function square( element){
    return Math.pow(element,2)
}
function cube(ele){
    return Math.pow(ele,3)
}

// working with array of strings 

let arr = ["Squid", "Lobster" , "Fish", "Shrimps"]

let answer = arr.map(lowerCase); 
console.log(answer); 

function upperCase( element){
    return element.toUpperCase();
}

function lowerCase( element){
    return element.toLowerCase();
}


