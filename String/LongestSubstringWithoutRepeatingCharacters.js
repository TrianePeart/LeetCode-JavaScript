/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0; // Initialize the maximum length of the substring.
    let start = 0; // Initialize the start pointer for the current substring.
    let charMap = new Map(); // Create a map to store characters and their last seen positions.

    for (let end = 0; end < s.length; end++) {
        let newest = s[end]; // Get the current character.

        if (charMap.has(newest)) {
            // If the character is already in the map, update the start pointer.
            start = Math.max(start, charMap.get(newest) + 1);
        }
        // Update the character's index in the map.
        charMap.set(newest, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength; // Return the length of the longest substring without repeating characters.
};

// Complexity Analysis:
// Time Complexity: O(n) - The algorithm iterates through the string once.
// Space Complexity: O(min(n, m)), where 'm' is the size of the character set.

// Possible Optimization:
// The code is already efficient with a time complexity of O(n). No further optimization is required for this algorithm.
