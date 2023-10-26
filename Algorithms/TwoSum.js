/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // Create a map to store numbers and their indices.
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement of the current number.
        if (map.has(complement)) {
            return [map.get(complement), i]; // If the complement exists in the map, return the indices.
        }
        map.set(nums[i], i); // Add the current number and its index to the map.
    }
};

// Complexity Analysis:
// Time Complexity: O(n) - The loop iterates through the array once.
// Space Complexity: O(n) - In the worst case, the map can store all elements.

// Possible Optimization:
// The given code is already efficient with a time complexity of O(n). Further optimization would be challenging without changing the fundamental algorithm. However, if memory usage is a concern, its possible to consider alternative data structures to reduce space complexity.
