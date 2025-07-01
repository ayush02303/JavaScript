const map = new Map();
// stores values in key value pairs 
map.set(1,21)
map.set(12,12)
map.set(2,23)
map.set(23,122)

console.log(map)

// map containing strings 

const map2 = new Map()
map2.set("Ayush",11)
map2.set("Damon",12)
map2.set("Ciri",22)

console.log(map2)


const arr = [1,2,4,5,67,88]

const result4 = arr.map((n3)=> {return n3*2 })
console.log(result4) // result 4 will contain the updated array 
console.log(arr) // arr will still retain it's original data

