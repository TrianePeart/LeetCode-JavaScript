/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

var kthDistinct = function(arr, k) {
    // Declare a function named kthDistinct that takes two parameters: arr and k
    const frequencyMap = new Map();
    // Create a Map called frequencyMap to store the frequency of elements
    const distinctStrings = [];
    // Create an empty array called distinctStrings to store distinct elements

    for (const str of arr) {
        // Loop through each element str in the input array arr
        if (!frequencyMap.has(str)) {
            // Check if the element str is not in the frequencyMap
            distinctStrings.push(str);
            // If it's not in the frequencyMap, push it to distinctStrings, indicating it's a distinct element
        }
        frequencyMap.set(str, (frequencyMap.get(str) || 0) + 1);
        // Update the frequency of the element in the frequencyMap
    }

    for (const str of distinctStrings) {
        // Loop through the distinct elements found
        if (frequencyMap.get(str) === 1) {
            // Check if the frequency of the element is 1, indicating it's distinct
            k--;
            // Decrement the k counter
            if (k === 0) {
                // If k reaches 0, the kth distinct element has been found
                return str;
                // Return the kth distinct element
            }
        }
    }

    return "";
    // If the function reaches this point, it means the kth distinct element was not found, so return an empty string
};

// Complexity Analysis:
// Time Complexity: O(n) - The algorithm iterates through the input array 'arr' once and updates the frequencyMap and distinctStrings.
// Space Complexity: O(k) - The space used is proportional to the number of distinct elements in 'arr,' where 'k' is the number of distinct elements.

// Possible Optimization:
// The code efficiently finds the kth distinct element, and there's no need for further optimization.