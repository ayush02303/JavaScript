// synchrounous javascript code demonstration 

const func2 = ()=> {
    console.log("would run later")
}

const func1 = ()=>{
    console.log("would run first")
    func2() 
    console.log("will run at last")
}
func1()

// running asynchronous code in JavaScript
// asynchronous programming can be handled in javaSript using setTimeout and setInterval methods

const func3 = ()=> {
   setTimeout( ()=>{
       console.log("will run after 5000 milliseconds")
   }, 5000)
}

const func4 = ()=>{
    console.log("would run first")
    func3() 
    console.log("will run at last")
}
func4()

