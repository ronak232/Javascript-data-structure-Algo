var arr = [1, 2, 3, 4, 5]

function waveArray(arr) {
  for (let i = 1; i < arr.length - 1; i+=2) {
    if(arr.length > 0) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
   
    }
  console.log(arr)
}

let res = waveArray(arr);
console.log(res);