/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const frequency = {}; // Create an object to store the frequencies of even elements.
    let mostFrequentEvenElement = -1; // Initialize with a default value.
    let maxFrequency = 0; // Initialize the maximum frequency.
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) { // Check if the current element is even.
        const currentElement = nums[i];
        frequency[currentElement] = (frequency[currentElement] || 0) + 1; // Update the frequency of the current even element.
  
        if (frequency[currentElement] > maxFrequency || (frequency[currentElement] === maxFrequency && currentElement < mostFrequentEvenElement)) {
          // Update the most frequent even element and its frequency if necessary.
          mostFrequentEvenElement = currentElement;
          maxFrequency = frequency[currentElement];
        }
      }
    }
  
    return mostFrequentEvenElement; // Return the most frequent even element.
  };
  
  // Complexity Analysis:
  // Time Complexity: O(n) - The algorithm iterates through the array once.
  // Space Complexity: O(m) - The space used is proportional to the number of unique even elements in the array.

  // Possible Optimization:
  // The code is already efficient, and it achieves a linear time complexity of O(n). No further optimization is required for this algorithm.
  