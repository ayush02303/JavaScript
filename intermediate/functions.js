function Add( num1,num2){
    return num1+num2
}
console.log(Add(12,12))

function Calculate(...num){
    return num
}
console.log(Calculate(100,200,300))     //... rest operator

//passing objects to a function 
const cart = { name : "Idle" , id : 12}
function CartDetails( any){
    console.log(`${any.name} is present at the number ${any.id}`)
} 
console.log(cart)