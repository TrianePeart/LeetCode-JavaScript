/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(n) {
    const numerals = {
        "I": 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0; // Initialize the result to store the integer value.

    for (let i = 0; i < n.length; i++) {
        const currentInt = numerals[n[i]]; // Get the integer value of the current Roman numeral.
        const next = numerals[n[i + 1]]; // Get the integer value of the next Roman numeral (if exists).

        if (currentInt < next) {
            result += next - currentInt; // If the current numeral is smaller than the next, subtract the current from the next.
            i++; // Skip the next numeral since it has been used.
        } else {
            result += currentInt; // Add the current numeral to the result.
        }
    }

    return result; // Return the final integer value.
};

// Complexity Analysis:
// Time Complexity: O(n) - The loop iterates through the Roman numeral string once.
// Space Complexity: O(1) - The space used is constant, not dependent on the input size.

// Possible Optimization:
// The code is already quite efficient with a time complexity of O(n). Further optimization is not needed for this algorithm. However,  can consider improving the readability of the code or using a switch statement for better organization of the Roman numeral values.