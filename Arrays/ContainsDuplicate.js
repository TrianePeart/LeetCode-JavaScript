/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}; // Initialize an object to store the counts of each number.
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            return true; // If a number is encountered again, it's a duplicate.
        } else {
            obj[nums[i]] = 1; // Mark the number as encountered.
        }
    }
    return false; // If no duplicates are found, return false.
};

// Complexity Analysis:
// Time Complexity: O(n) - The algorithm iterates through the array once.
// Space Complexity: O(n) - The space used is proportional to the number of unique elements in the array.

// Possible Optimization:
// The code can be optimized to use O(1) extra space by sorting the array and checking for adjacent duplicates. Sorting the array would change the time complexity to O(n*log(n)).
