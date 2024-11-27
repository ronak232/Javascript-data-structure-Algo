var arr = [2,3,5,1,3];
let extraCandies = 3;

function greatestCandies(arr, extraCandies) {
    let len = candies.length;
    const maxCandy = Math.max(...candies);
    for(let i = 0; i < len; i++) {
        if(candies[i] + extraCandies >= maxCandy ) {
             candies[i] = true;
        }
        else {
             candies[i] = false;
        }
    }
    return candies;
}

greatestCandies(arr, 3)