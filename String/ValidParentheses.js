/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []; // Initialize a stack to keep track of opening brackets.
    const pairs = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      
      if (c in pairs) { // If the character is an opening bracket.
        stack.push(c); // Push it onto the stack.
      } else { // If the character is a closing bracket.
        const top = stack.pop(); // Pop the top element from the stack.
        if (!top || pairs[top] !== c) {
          // If the stack is empty, or the top element does not match the current closing bracket.
          return false; // Return false, as it's an invalid expression.
        }
      }
    }
    
    return stack.length === 0; // Return true if the stack is empty (all brackets are matched).
  };
  
  // Complexity Analysis:
  // Time Complexity: O(n) - The algorithm iterates through the input string once.
  // Space Complexity: O(n) - The space used is proportional to the length of the input string in the worst case.
  
  // Possible Optimization:
  // The code is already efficient with a time complexity of O(n). No further optimization is required for this algorithm.  