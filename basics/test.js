function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the string to get the key
        const key = str.split('').sort().join('');
        // Push into map under that key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Convert map values to array of arrays
    return Array.from(map.values());
}

// Test the function
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
