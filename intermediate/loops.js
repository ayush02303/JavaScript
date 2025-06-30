console.log("looping structures");

for( let i = 0 ; i< 10 ; i++){
    console.log(i)
}

// demonstration of while loop 
let b = 10

while( b>0){
    console.log(`This loop is running ${b} times`)
    b = b-1; 
}

// break and continue 

//break is specifically used when you want to terminate the iteration , resulting in breaking out from the whole loop 
//for instance 
for( let a = 1 ; i<= 10 ; i++){
    console.log(i); 
    if(i == 5) break; // as the iterator reaches 5, loop will break out resulting in 1,2,3,4,5 
}
