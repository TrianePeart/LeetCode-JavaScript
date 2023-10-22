/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []; // Initialize an array to store valid combinations.
    backtrack(result, "", 0, 0, n); // Call the backtrack function to generate combinations.
    return result; // Return the array of valid combinations.
};

function backtrack(result, current, open, close, max) {
    if (current.length === max * 2) {
        result.push(current); // If a valid combination is complete, add it to the result.
        return;
    }

    if (open < max) {
        backtrack(result, current + "(", open + 1, close, max);
    }
    // Recursively add an open parenthesis '(' if there are still openings available.

    if (close < open) {
        backtrack(result, current + ")", open, close + 1, max);
    }
    // Recursively add a closed parenthesis ')' if there's a matching open parenthesis.
}

// Complexity Analysis:
// Time Complexity: O(2^(2n)) - Exponential time due to the recursive nature of the algorithm.
// Space Complexity: O(2n) - Space used for the call stack during recursion.

// Possible Optimization:
// This code can be optimized by using an iterative approach, which would reduce the space complexity associated with the call stack during recursion. Additionally, avoiding string concatenation by using an array or other data structure to build the combinations can improve both time and space efficiency for large values of n.