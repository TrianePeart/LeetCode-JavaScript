/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let values = []; // Initialize an array to store the values from the linked list.
    let current = head; // Create a pointer to traverse the linked list.
    
    // Store values in an array by traversing the linked list.
    while (current != null) {
      values.push(current.val); // Add the value of the current node to the array.
      current = current.next; // Move to the next node.
    }
    
    // Check if the array is a palindrome using two-pointer technique.
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
      if (values[left] !== values[right]) {
        return false; // If values at the left and right pointers don't match, it's not a palindrome.
      }
      left++;
      right--;
    }
    
    return true; // If all values match, it's a palindrome.
  };
  
  // Complexity Analysis:
  // Time Complexity: O(n) - The algorithm traverses the linked list once.
  // Space Complexity: O(n) - The space used is proportional to the size of the linked list.
  
  // Possible Optimization:
  // In retrospect the code can be optimized to use only O(1) extra space by reversing the second half of the linked list and then comparing it with the first half. This can be done without the need for an additional array.  