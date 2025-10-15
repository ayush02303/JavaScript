// normal function declaration 
function DoSomething() {
    
}

// doing the same, this time using arrow functions 
const DoSomethingAgain = () => { }

// ternary operator in javaScript 
let age = 17; 
let name = age > 10 && "ayush";
console.log(name);

// another example 
let age2 = 2;
let name2 = age2 > 10 ? "Aayush" : "Badola";
console.log(name2);

// destructuring objects in javaScript
const person = { 
    name: "Ayush", 
    age: 20, 
    isMarried: false
};
const { name: personName, age: personAge, isMarried } = person;

// using spread operator to copy values from person into another object
const person2 = { ...person, name: "John" };
console.log(person2);

// using spread operator in arrays 
let arr1 = [1, 2, 4, 5];
let arr2 = [...arr1, 12, 34];
console.log(arr2);

// maps and filters in javascript 
const arr = [12, 34, 56, 78, 89];

const result = arr.map(data => data + 1);
console.log(result);

const result2 = arr.filter(data => data > 50);
console.log(result2);
