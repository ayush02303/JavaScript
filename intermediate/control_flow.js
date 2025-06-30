let a = 10 
if( a == 10) console.log("present")
else console.log("absent")

//demonstration of == and == operator 
// == checks value , === does the same but checks the type of value too 

console.log( 12 ==  "12")  // will return true
console.log( 12 === "12")  // will return false as int and String do not match

// if and else 
const digit = 2
if( digit>1) console.log("greater than one") 
else console.log("certainly smaller")

//dem. 2
const power = 500; 
if( power > 100){
    let status = "functional"
    console.log(`current status is ${status}`)
}
else if( power == 200){
    let status = "functional but cannot uplift"
    console.log(`current state is ${status}`)
} 
else{
    console.log("terminate the power")
}