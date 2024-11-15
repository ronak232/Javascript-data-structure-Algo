var a1 = [1, 3, 4, 5, 6, 9, 2];
var a2 = [1, 4, 2, 5];

function isSubset(a1, a2, n, m) {
  let hashMap = new Map();

  if (a2.length === 0) return "No";

  for (let i = 0; i < a1.length; i++) {
    hashMap.set(a1[i], hashMap.get(a1[i] || 0) + 1);
  }
  for (let i = 0; i < a2.length; i++) {
    if (!hashMap.has(a2[i])) {
      return "No";
    } else {
      hashMap[a2[i]] -= 1;
    }
  }

  return "Yes"; // All elements of a2 were found in a1
}
let res = isSubset(a1, a2);
console.log(res);

// using hashmap 
/* 
complexity ---> time - O(n);
           ---> space - O(n)

*/
function isSubsetWithHashMap(a1, a2) {
  let hashMap = {};
  for (let i = 0; i < a1.length; i++) {    // O(n)
    hashMap[a1[i]] = (hashMap[a1[i]] || 0) + 1;
  }

  // Step 2: Check every element of a2 in hashMap
  for (let i = 0; i < a2.length; i++) {   // O(m)
    if (hashMap[a1[i]] !== a2[i]) {
      return "No"; // Return "No" if any element of a2 is not in a1
    } else {
      // Decrement the count of the matched element
      hashMap[a2[i]]--;
    }
  }
  return "Yes"; // All elements of a2 were found in a1
}
let res1 = isSubsetWithHashMap(a1, a2);
console.log(res1);

/*  
time complexity ---> O(n+m);
space complexity --> O(n);  // storing in hashmap
*/