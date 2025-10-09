// promises in javascript 

const pr = new Promise( (resolve , reject)=>{
    let work = true
    
    if( work){
        console.log("it'll work ")
        resolve()
    }
    else{
        reject()
        console.log("connected aborted")
    }
})

const pr1 = new Promise((resolve, reject) => {
  let work = true;

  if (work) {
    console.log("It'll work");
    resolve("Promise resolved successfully!");
  } else {
    console.log("Connection aborted");
    reject("Promise rejected!");
  }
});
pr1
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
