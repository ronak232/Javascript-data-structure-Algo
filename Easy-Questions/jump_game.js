let len = nums.length;
let hashMap = new Map();
let isGoodNumber = 0;
for (let value of nums) {
  if (hashMap.has(value)) {
    isGoodNumber += hashMap.get(value); // increment the count of good numbers
  }
  hashMap.set(value, (hashMap.get(value) || 0) + 1);   // increment the count of the number
}
return isGoodNumber;
