// 56. Merge Intervals

// Difficulty: Medium
// Platform: LeetCode
// Frequently Asked In: Google

// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals,
// and return an array of the non-overlapping intervals
// that cover all the intervals in the input.

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// Time O(n^2), Space O(1)
function mergeIntervals(intervals) {
  // Step 1: Sort intervals based on start time
  // so that we can solve [[4,7],[1,4]] where digit 7 is greater than 4,
  // to avoid [[1,4]] as final solution
  intervals.sort((a, b) => a[0] - b[0]);

  // flag to track if merging
  let overlap = false;

  // Outer loop: pick one interval
  for (let i = 0; i < intervals.length - 1; i++) {
    overlap = false;

    // Inner loop: compare with next intervals
    for (let j = i + 1; j < intervals.length; j++) {
      // Check if intervals overlap
      // condition: end of i >= start of j,
      if (intervals[i][1] >= intervals[j][0]) {
        overlap = true;

        // If current interval already contain next interval we skip this
        // in case like [[1, 4],[2, 3]]
        if (intervals[i][1] < intervals[j][1]) {
          intervals[i].pop(); // remove old end
          // add new end, which is always correct since we sort internals
          intervals[i].push(intervals[j][1]);
        }

        // Remove the j-th interval since it's merged
        intervals.splice(j, 1);

        j--; // adjust index because array size reduced
      }
    }

    // If merging happened, recheck same i again
    // because new overlaps might exist after merging
    if (overlap) i--;
  }
}

// Time O(nlogn), Space O(1)
// could be Time O(n^2) due to (due to splice shifting)
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      if (intervals[i][1] < intervals[i + 1][1]) {
        intervals[i].pop();
        intervals[i].push(intervals[i + 1][1]);
      }
      intervals.splice(i + 1, 1);
      i--;
    }
  }

  return intervals;
}

const intervals = [
  [1, 4],
  [2, 3],
];

mergeIntervals(intervals);
console.log(intervals);
