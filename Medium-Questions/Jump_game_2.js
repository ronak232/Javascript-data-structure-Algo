/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let len = nums.length;

    if (len === 1) return 0;

    let jump = 0; // total jump
    let current = 0; // current position distance from last
    let maxReach = 0; // maximum jump from current position 

    for (let i = 0; i < len - 1; i++) {
        maxReach = Math.max(maxReach, nums[i] + i);
        if (i === current) {
            jump++;
            current = maxReach
        }
    }
    return jump
};

/**
 * #### my understanding

i'm a player in hurdle race i need to keep jumping to reach the end or finishing line....
let say we have the nums = [2, 3, 1, 1,4] as a maximum jumps i can take from current position...
my goal is to reach the end in minimum number of jumps
where i = 0 till end n-1; i = here is starting place or points 

i have keep jumping till i(me) reach the end keeping in my mind below points:
1. totaljump count to reach the end
2. current value or position from last jump
3. maxReach how many jumps required to jump farthest

tracking points:
1. Total Jumps 
2. currentPos --> current position distance from last 
3. maxReach --> maximum jump from current position or keeps track of how far we can reach with our next jump.

Iteration 0 (i = 0):
Current Position: 0
Maximum Jump from Current Position: nums = 2
Update farthest:
farthest = Math.max(farthest, i + nums[i])
farthest = Math.max(0, 0 + 2) = 2
Check if we have reached the end of our current jump range:
Since i (0) == currentEnd (0), we need to make a jump.
Increment jumps: jumps++ → jumps = 1
Update currentEnd: currentEnd = farthest → currentEnd = 2


 */