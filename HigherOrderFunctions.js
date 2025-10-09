// higher order functions in javaScript 

const radius = [12,34,56,67,78] 

const summation =  function ( radius ){
    let sum = 0 ; 
    for( let i = 0 ; i < radius.length ; i++){
        sum+= radius[i]
    }
    return sum 
}
console.log( summation(radius))

// example demonstrating higher order function in javaScript 
const nums = [12,34,56,78,89,90,2]

const area = ( radius)=>{ return Math.PI*radius*radius}
const circumference = ( radius)=>{ return Math.PI*2*radius}

const calculate = function( radius , logic){
    let output = []
    for( let i = 0 ; i < radius.length ; i++){
        output.push( logic(radius[i]))
    }
    return output
}

console.log( calculate(nums, area ))
console.log( calculate(nums, circumference))