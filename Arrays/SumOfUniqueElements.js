/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const count = {}; // Object to store element counts

    // Count the occurrences of each element
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    let sum = 0;

    // Sum up the unique elements (those with a count of 1)
    for (const num in count) {
        if (count[num] === 1) {
            sum += parseInt(num);
        }
    }
    return sum;
};

// Complexity Analysis:
// Time Complexity: O(n) - The algorithm iterates through the input array 'nums' once to count the occurrences and once to sum the unique elements.

// Space Complexity: O(k) - The space used is proportional to the number of unique elements in 'nums,' where 'k' is the number of unique elements.

// Possible Optimization:
// The code is already efficient and has a linear time complexity of O(n). It effectively counts and sums the unique elements. There's no need for further optimization.