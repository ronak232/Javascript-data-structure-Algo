function countOccurrences(arr) {
    let hashMap = {}; // Initialize an empty HashMap (object in JavaScript)
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      
      if (hashMap[num]) { // If num already exists in HashMap, increment its count
        hashMap[num] += 1;
      } else { // If num does not exist in HashMap, initialize it with count 1
        hashMap[num] = 1;
      }
    }
  
    return hashMap;
  }
  
  // Test with an example array
  let arr = [1, 2, 2, 3, 3, 3];
  console.log(countOccurrences(arr)); // Expected output: { '1': 1, '2': 2, '3': 3 }

// time complexity 𝑂(1).