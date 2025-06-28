const  target = { a:1 , b:2}
const source = { c:3 , d:4}
 const resultant = Object.assign(target,source); 
console.log(target); 
console.log(target == resultant)   // will return true if matched
console.log(target == source)