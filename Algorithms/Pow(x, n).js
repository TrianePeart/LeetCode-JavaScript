/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) { // If the exponent is 0, return 1 (anything raised to the power of 0 is 1).
        return 1;
    }
    if (n < 0) { // If the exponent is negative, invert x and make n positive.
        x = 1 / x;
        n = -n;
    }
    // Recursively calculate the result by dividing the power by 2
    // and multiplying the result by itself.
    let half = myPow(x, Math.floor(n / 2));
    let result = half * half;
    // If n is odd, multiply the result by x.
    if (n % 2 === 1) {
        result *= x;
    }
    return result;
};

// Complexity Analysis:
// Time Complexity: O(log(n)) - The algorithm uses a divide-and-conquer approach.
// Space Complexity: O(log(n)) - The space used for the recursion stack.

// Possible Optimization:
// The code is already efficient with a time complexity of O(log(n)) and is based on the binary exponentiation method. No further optimization is required for this algorithm.
