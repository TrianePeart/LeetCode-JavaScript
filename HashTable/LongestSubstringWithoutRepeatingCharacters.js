/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0; // Initialize the maximum length of the substring.
    let start = 0; // Initialize the starting index of the current substring.
    let newMap = new Map(); // Create a map to store characters and their last seen indices.

    for (let end = 0; end < s.length; end++) {
        let newest = s[end]; // Get the latest character in the string.

        if (newMap.has(newest)) {
            // If the character is already in the map, update the start index.
            start = Math.max(start, newMap.get(newest) + 1);
        }

        // Update the character's index in the map.
        newMap.set(newest, end);

        maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length.
    }

    return maxLength;
};

// Complexity Analysis:
// Time Complexity: O(n) - The loop iterates through the string once.
// Space Complexity: O(min(n, m)) - The space used in the map is proportional to the size of the character set or the length of the string.

// Possible Optimization:
// The code is already efficient, but in retrospect you could optimize the space complexity by using a simpler data structure, such as an array of fixed size, to store character indices. This would reduce the space complexity to O(1) if the character set is known to be of limited size. 