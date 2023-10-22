/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length; // Calculate the total length of the merged arrays.
    const isEven = totalLength % 2 === 0; // Check if the total length is even.
    const medianIndex = Math.floor(totalLength / 2); // Calculate the median index.

    const merge = (arr1, arr2, k) => {
        if (arr1.length === 0) {
            return arr2[k]; // If the first array is empty, return the kth element from the second array.
        }
        if (arr2.length === 0) {
            return arr1[k]; // If the second array is empty, return the kth element from the first array.
        }
        const midIndex1 = Math.floor(arr1.length / 2);
        const midIndex2 = Math.floor(arr2.length / 2);
        const midElement1 = arr1[midIndex1];
        const midElement2 = arr2[midIndex2];
        if (k <= midIndex1 + midIndex2) {
            if (midElement1 > midElement2) {
                return merge(arr1.slice(0, midIndex1), arr2, k); // Recursively merge and search in the left part of arr1 and all of arr2.
            } else {
                return merge(arr1, arr2.slice(0, midIndex2), k); // Recursively merge and search in all of arr1 and the left part of arr2.
            }
        } else {
            if (midElement1 > midElement2) {
                return merge(arr1, arr2.slice(midIndex2 + 1), k - midIndex2 - 1); // Recursively merge and search in all of arr1 and the right part of arr2.
            } else {
                return merge(arr1.slice(midIndex1 + 1), arr2, k - midIndex1 - 1); // Recursively merge and search in the right part of arr1 and all of arr2.
            }
        }
    }

    if (isEven) {
        return (merge(nums1, nums2, medianIndex - 1) + merge(nums1, nums2, medianIndex)) / 2; // Return the average of two median elements if the total length is even.
    } else {
        return merge(nums1, nums2, medianIndex); // Return the median element if the total length is odd.
    }
};

// Complexity Analysis:
// Time Complexity: O(log(min(n, m))) - The recursive binary search approach.
// Space Complexity: O(log(min(n, m))) - The space used for the recursion stack.

// Possible Optimization:
// The code is already quite efficient, but it can be optimized by using a non-recursive binary search algorithm to find the median. This would further reduce space complexity to O(1). However, it would require more complex indexing calculations and conditions and as of now I do not know a clear alternative. 
