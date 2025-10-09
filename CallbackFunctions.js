// callback function 
// a function that may take another function as an arguement as well as a parameter may be called an callback function 

function hellothere( name ,callback){
    console.log( name)
    
    callback( name)
}

function greet( name){
    console.log( `hello ${ name }`)
}

hellothere( "ayush" , greet)

// setInterval and setTimeout also take callback functions as an parameters

 const setId = setInterval( ()=>{ console.log("i've been called this many times ")} ,3000)
 
 clearInterval( setId)
 
 setTimeout( ()=>{ console.log("I'll be called after 5 seconds")}, 5000)
 
 // even maps and filter methods used in javaScript take callbacks 
 const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);

 
