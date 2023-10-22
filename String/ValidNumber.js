/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim(); // Remove leading and trailing white spaces.
    const pattern = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
    // Define a regular expression pattern to match valid number strings.
    const match = s.match(pattern);
    // Match the input string against the defined pattern.
    return match !== null; // Return true if a match is found; otherwise, return false.
  };
  
  // Complexity Analysis:
  // Time Complexity: O(n) - The regular expression matching operation takes linear time.
  // Space Complexity: O(1) - The space used is constant, not dependent on the input size.
  
  // Possible Optimization:
  // The code is already efficient, and the regular expression pattern is optimized to match valid number strings. No further optimization is required for this algorithm.
  