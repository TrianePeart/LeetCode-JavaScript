/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next){
        return head; // If the list is empty or contains only one node, no swapping is needed.
    }

    const newNode = new ListNode(0); // Create a dummy node to simplify swapping.
    newNode.next = head; // Set the dummy node's next to the head of the list.
    let current = newNode; // Create a pointer for the current node.

    while(current.next && current.next.next){
        const firstNode = current.next;
        const secondNode = current.next.next;
        const nextPair = secondNode.next;

        // Swapping the nodes
        current.next = secondNode;
        firstNode.next = nextPair;
        secondNode.next = firstNode;

        current = firstNode; // Move the current pointer to the first node of the next pair.
    }
    return newNode.next; // Return the modified list starting from the next of the dummy node.
};

// Complexity Analysis:
// Time Complexity: O(n) - The algorithm iterates through the list once.
// Space Complexity: O(1) - The space used is constant, not dependent on the input size.

// Possible Optimization:
// The code is already efficient with a time complexity of O(n). No further optimization is required for this algorithm.
