/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i; // Found the first non-repeating character using indexOf and lastIndexOf.
        }
    }
    return -1; // Return -1 if no non-repeating character is found.
};

// Complexity Analysis:
// Time Complexity: O(n^2) - The algorithm uses indexOf and lastIndexOf for each character in the string, making it quadratic.
// Space Complexity: O(1) - The space used is constant, not dependent on the input size.

// Possible Optimization:
// The code can be optimized to have a time complexity of O(n) by using a character frequency map to count the occurrences of each character in a single pass.
