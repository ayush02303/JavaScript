//demonstrating filter method in javaScript
let nums = [12,4,45,67,2,45,67];

let answer = nums.filter( (num)=> num > 40 )
console.log(answer);

// chaining filter and map methods

let ans = nums.map( (num)=> num+10).map((num)=> num+1).filter((num)=>num>50)
console.log(ans);

// visualization 

let anss = nums
  .map(num => num + 10)      // [22, 14, 55, 77, 12, 55, 77]
  .map(num => num + 1)       // [23, 15, 56, 78, 13, 56, 78]
  .filter(num => num > 50);  // [56, 78, 56, 78]

console.log(anss);  // [56, 78, 56, 78]