function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
      
        const key = str.split('').sort().join('');
        // Push into map under that key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}


const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
