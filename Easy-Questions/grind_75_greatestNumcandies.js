var arr = [2,3,5,1,3];
let extraCandies = 3;

function greatestCandies(arr, extraCandies) {
    let len = arr.length;
    const maxCandy = Math.max(...arr); // find the max value from array...
    for(let i = 0; i < len; i++) {
        if(arr[i] + extraCandies >= maxCandy ) {
            arr[i] = true;
        }
        else {
            arr[i] = false;
        }
    }
    return arr;
}

greatestCandies(arr, 3)