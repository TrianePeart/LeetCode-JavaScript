/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Handle the case of an empty array
  
    let i = 0; // Pointer to keep track of unique elements
  
    for (let n = 1; n < nums.length; n++) {
      if (nums[n] !== nums[i]) { // If the current element is not a duplicate
        i++; // Move the i pointer to the next position
        nums[i] = nums[n]; // Replace the element at i with the current element
      }
    }
  
    return i + 1; // Return the number of unique elements
  };
  
  // Complexity Analysis:
  // Time Complexity: O(n) - The algorithm iterates through the array once.
  // Space Complexity: O(1) - The space used is constant, not dependent on the input size.
  
  // Possible Optimization:
  // The code is already efficient with a time complexity of O(n). No further optimization is required for this algorithm.  