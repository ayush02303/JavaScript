const data = {
    unsername : "Joe",
    id : 12,
    greetmessage : function(){
        console.log(`Hii ${this.unsername}`)
    }
    
}
console.log(data)
data.greetmessage();

//demonstration of arrow functions 
// functionality remains the same

function AddTwo( num1 , num2){
    console.log(num1+num2)
}

const add = ( num1,num2) =>{
    return num1+num2 ; 
}
console.log(add(12,12)); 

// for the same, you can also write 

const add2 = (num1,num2) => (num1+num2)
console.log(add2(12,122))
