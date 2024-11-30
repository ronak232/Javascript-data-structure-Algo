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
  }

  for (let i = 0; i < count1; i++) {
    arr[replaceI++] = 1;
  }

  for (let i = 0; i < count2; i++) {
    arr[replaceI++] = 2;
  }
}

let res = sort012(arr);
console.log(res);


/* Dutch national flag algorithm solution... */

/**
 * 
 * @param arr[]
 * 
 * [0,1, 2, 2, 0 ,1, 1]
 * 
 * mid = 0 --> low <-> mid
 * mid = 1   do nothing
 * mid = 2 --> high <-> mid
 */

function sort012DNF(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while(mid <= high) {
    if(arr[mid] === 0){
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }

    if(arr[mid] === 1){
      mid++
    }

    if(arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }  
}

let res1 = sort012DNF(arr);
console.log(res1);