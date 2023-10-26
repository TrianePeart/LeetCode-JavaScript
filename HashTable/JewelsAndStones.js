/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0; // Initialize a counter to keep track of the number of jewels.
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            jewelCount++; // If the stone is a jewel, increment the count.
        }
    } 
    return jewelCount; // Return the total count of jewels in the stones.
 };
 
 // Complexity Analysis:
 // Time Complexity: O(m*n) - The algorithm iterates through stones and checks if each stone is a jewel, where 'm' is the length of jewels and 'n' is the length of stones.
 // Space Complexity: O(1) - The space used is constant, not dependent on the input size.
 
 // Possible Optimization:
 // The code can be optimized to have a time complexity of O(m + n) by using a Set to store the jewels and checking if each stone is in the Set. 