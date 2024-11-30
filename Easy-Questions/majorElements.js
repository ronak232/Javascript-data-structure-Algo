// -------------------Moore's Voting Algorithm ----------//

var arr = [6, 8, 5];
/* 
-->res and majority are initialized to 0.
-->res will store the majority element, while majority will store its count.

Time-complexity - O(n)
Space-complexity - O(n)
*/
function majorElement(arr) {
  let hashMap = {};
  let majorityElem = 0;
  let res = 0;

  for (let key of arr) {
    hashMap[key] = (hashMap[key] || 0) + 1; // keep the track of duplicate value occurences...
  }

  for (let key of arr) {
    if (hashMap[key] > majorityElem) {
      res = key; // assign the index of that majority value[key]
      majorityElem = hashMap[key];
    }
  }
  return res;
}

let result = majorElement(arr);
console.log(result);

/* 
Time-complexity - O(n)
Space-complexity - O(1)
*/

function majorElementSingleSpace(arr) {
  let majorityElem = 0; // Keeps track of the "score" for the current element.
  let res = 0; // Holds the current majority candidate.

  for (let key of arr) {
    if (majorityElem === 0) {
      //If the "score" (majorityElem) drops to 0, we set the current element (key) as the new candidate (res).
      res = key; // store new majority element
    }
    if (key === res) {
      majorityElem += 1; // Increment score if the element matches the candidate.
    } else {
      majorityElem -= 1; // Decrement score otherwise.
    }
  }
  console.log(res);
  return res;
}

let result1 = majorElementSingleSpace(arr);
console.log(result1);
