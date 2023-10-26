/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    // Create an object to store the count of each element.
    const countMap = {};
    // Initialize the variable to store the count of good pairs.
    let goodPairsCount = 0;
    // Iterate through the array and count the occurrences of each element.
    for (const num of nums) {
        if (countMap[num]) {
            // If the element has been encountered before, increment the count.
            goodPairsCount += countMap[num];
            countMap[num]++;
        } else {
            // If the element is encountered for the first time, initialize the count.
            countMap[num] = 1;
        }
    }
    return goodPairsCount;
};

// Complexity Analysis:
// Time Complexity: O(n) - The algorithm iterates through the array once.
// Space Complexity: O(n) - The space used is proportional to the number of unique elements in the array.

// Possible Optimization:
// The code is already efficient, and it achieves a linear time complexity of O(n). No further optimization is required for this algorithm.