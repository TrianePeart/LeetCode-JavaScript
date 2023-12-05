/**
 * @param {string} binary
 * @return {number}
 */

var numberOfUniqueGoodSubsequences = function(binary) {
    // Define a constant MOD for later modulo operations
    const MOD = 1000000007;
    
    // Get the length of the binary string
    const n = binary.length;
    
    // Initialize counts for subsequences ending with '0' and '1'
    let endsWithZero = 0;
    let endsWithOne = 0;
    
    // Initialize a variable to track if '0' has been seen in the string
    let hasZero = 0;
    
    // Iterate through the binary string character by character
    for (let i = 0; i < n; i++) {
        // Check if the current character is '0'
        if (binary[i] === '0') {
            // Calculate the count of subsequences ending with '0'
            endsWithZero = (endsWithZero + endsWithOne) % MOD;
            
            // Set the 'hasZero' flag to 1, indicating '0' has been seen
            hasZero = 1;
        } else {
            // Calculate the count of subsequences ending with '1'
            // These can be formed by adding '1' to both '0' and '1' subsequences
            endsWithOne = (endsWithZero + endsWithOne + 1) % MOD;
        }
    }

    // If '0' is present in the string, add 1 to the result; otherwise, use only endsWithOne
    return (endsWithOne + (hasZero + endsWithZero)) % MOD;
};

// Time Complexity: O(n) - Linear time due to a single pass through the binary string.
// Space Complexity: O(1) - Constant space is used for variables; no additional data structures.
// No further optimization is needed; the code efficiently calculates the unique good subsequences.