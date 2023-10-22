/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Create a dummy head node to simplify code
    let p = l1, q = l2, current = dummyHead;
    let carry = 0; // Initialize a carry variable to handle overflow
    
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0; // Get the value of l1 if it exists, or set to 0
        let y = (q !== null) ? q.val : 0; // Get the value of l2 if it exists, or set to 0
        let sum = carry + x + y; // Calculate the sum of current digits
        carry = Math.floor(sum / 10); // Calculate the carry for the next iteration
        current.next = new ListNode(sum % 10); // Create a new node with the remainder
        current = current.next; // Move to the next node
        if (p !== null) p = p.next; // Move to the next node in l1 if it exists
        if (q !== null) q = q.next; // Move to the next node in l2 if it exists
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry); // If there's a remaining carry, add a new node for it
    }
    
    return dummyHead.next; // Return the result starting from the first real node, not the dummy head.
};

// Complexity Analysis:
// Time Complexity: O(max(n, m)) - The loop runs for the longer of the two input lists.
// Space Complexity: O(max(n, m)) - The space used is proportional to the length of the longer list.

// Possible Optimization:
// The code is already efficient, but one possible optimization is to avoid creating the dummy head node and handle the first node separately. This would slightly reduce space complexity. But I am most comfortable with this solution. 
