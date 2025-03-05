/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let len = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]); // sort the array based on the first element of intervals...
    let mergedArr = [intervals[0]]; // assign the first item of interval to keep checking the overlapping interval range or elements...
    for (let i = 1; i < len; i++) {
        let lastIndx = mergedArr.length - 1; // get last element of merging interval array after 
        let lastElement = mergedArr[lastIndx][1]; // get the last element of merge elements on each iteration...
        if (intervals[i][0] <= lastElement) { // check if the given interval first element is less then or equal to mergedarr lastelemnent if it is
            if (intervals[i][1] >= lastElement) {
                mergedArr[lastIndx][1] = intervals[i][1]; // assign last element with the current interval first element
            } else {
                mergedArr[lastIndx][1] = lastElement // if not --> keep the lastelement as it is...
            }
        }
        else {
            mergedArr.push(intervals[i]) // if interval does not have any overlapping interval push into mergearr...
        }
    }
    return mergedArr; // return mergeArr...
};