var arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sort012(arr) {
  let count1 = 0,
    count2 = 0,
    count0 = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // O(n)
    // count the occurence of 0s 1s and 2s...
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  let replaceI = 0;
  //constant O(n)
  // in-place the 0s 1s and 2s
  for (let i = 0; i < count0; i++) {
    arr[replaceI++] = 0;
    console.log("Place 0 --->", arr, replaceI);
  }

  for (let i = 0; i < count1; i++) {
    arr[replaceI++] = 1;
    console.log("Place 1 --->", arr, replaceI);
  }

  for (let i = 0; i < count2; i++) {
    arr[replaceI++] = 2;
    console.log("Place 2 --->", arr, replaceI);
  }
}

let res = sort012(arr);
console.log(res);


/* Dutch national flag algorithm solution... */


