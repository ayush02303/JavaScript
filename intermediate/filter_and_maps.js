const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const num = [1,2,33,4,45,677,78,8989,900,90]
const result1 = num.filter((n)=> n>10)
console.log(result1)

//maps 
const num1 = [1,22,34,45,67,788,899]
const result3 = num1.map((n) => n+2)
console.log(result3)