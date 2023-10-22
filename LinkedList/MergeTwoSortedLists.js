/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a new linked list to store the merged list.
    let mergedList = new ListNode(0);
    // Create a pointer for the current node of the merged list.
    let currentNode = mergedList;
    // Create pointers for the current nodes of list1 and list2.
    let current1 = list1;
    let current2 = list2;

    // Traverse through both lists.
    while (current1 !== null && current2 !== null) {
        // Compare the values of the current nodes of list1 and list2.
        if (current1.val < current2.val) {
            // Add the current node of list1 to the merged list.
            currentNode.next = current1;
            // Move the current1 pointer to the next node of list1.
            current1 = current1.next;
        } else {
            // Add the current node of list2 to the merged list.
            currentNode.next = current2;
            // Move the current2 pointer to the next node of list2.
            current2 = current2.next;
        }
        // Move the current node of the merged list to the next node.
        currentNode = currentNode.next;
    }

    // Add any remaining nodes of list1 to the merged list.
    if (current1 !== null) {
        currentNode.next = current1;
    }
    // Add any remaining nodes of list2 to the merged list.
    if (current2 !== null) {
        currentNode.next = current2;
    }

    // Return the head of the merged list, which is the next node of the initial dummy node.
    return mergedList.next;
};

// Complexity Analysis:
// Time Complexity: O(m + n) - The algorithm iterates through both lists once.
// Space Complexity: O(1) - The space used is constant, not dependent on the input size.

// Possible Optimization:
// The code is already efficient with a time complexity of O(m + n), where m and n are the lengths of the input lists. No further optimization is required for this algorithm.