/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the input array in ascending order.
    const result = []; // Initialize the result array to store triplets.

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicate values to avoid duplicate triplets.
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++; // Move left pointer to the right to increase the sum.
            } else if (sum > 0) {
                right--; // Move right pointer to the left to decrease the sum.
            } else {
                result.push([nums[i], nums[left], nums[right]]); // Add the triplet to the result.

                left++;
                right--;

                // Skip duplicate values to avoid duplicate triplets.
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }

    return result; // Return the array of unique triplets that sum to zero.
};

// Complexity Analysis:
// Time Complexity: O(n^2) - The algorithm iterates through the array and uses two-pointer technique.
// Space Complexity: O(1) - The space used is constant, not dependent on the input size.

// Possible Optimization:
// The code is already efficient with a time complexity of O(n^2). Further optimization is not  needed for this algorithm. However, if you like you can consider improving the readability of the code by breaking down complex expressions into separate statements for better understanding.
