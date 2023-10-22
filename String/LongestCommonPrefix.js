/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""; // If the input array is empty, return an empty string.
    
    for (let i = 0; i < strs[0].length; i++) { // Iterate over the characters in the first string.
      for (let n = 1; n < strs.length; n++) { // Iterate over the remaining strings.
        if (i >= strs[n].length || strs[n][i] !== strs[0][i]) {
          // If any string has a different character at the current index i
          // or is shorter than the first string, return the longest common prefix found
          // so far up to the current index i.
          return strs[0].substring(0, i);
        }
      }
    }
    
    // If all characters match up to the length of the first string, return the first
    // string in its entirety, as it must be the longest common prefix.
    return strs[0];
  };
  
  // Complexity Analysis:
  // Time Complexity: O(S), where S is the sum of all characters in the array of strings.
  // Space Complexity: O(1) - The space used is constant and not dependent on the input size.
  
  // Possible Optimization:
  // The code is already efficient with a time complexity of O(S). One possible optimization is to check the length of each string first and return early if any string is shorter than the first one. (Credit to Mike Boyal for this idea) This could reduce the number of character comparisons in some cases, but it would not change the overall time complexity.  