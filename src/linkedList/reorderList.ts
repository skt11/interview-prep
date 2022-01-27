/**
 Do not return anything, modify head in-place instead.
 */
//
function reorderList(head: ListNode | null): void {
    
    if(!head || !head.next || !head.next.next) return

    const rightHalfStack : ListNode[] = getRightHalfNodes(head);
    // console.log(rightHalfStack)
    let curr = head;
    while(rightHalfStack.length > 1){
        // console.log(curr)
        insertNode(curr, rightHalfStack.pop())
        curr = curr.next.next
    }
    rightHalfStack[rightHalfStack.length-1].next = null;

};


const insertNode = (curr: ListNode, newNode: ListNode):void => {
    const nextNode = curr.next;
    curr.next = newNode;
    newNode.next = nextNode;
}

const getRightHalfNodes = (head: ListNode): ListNode[] => {
    const rightHalfStack = [];

    let follower = head;
    let leader = head.next.next;
    
    if(!leader) return rightHalfStack;
    
    while(follower){
        if(leader && leader.next){
            leader = leader.next.next;
        } else{
            follower.next && rightHalfStack.push(follower.next)
        }
        follower = follower.next;
    }
    
     return rightHalfStack;
}

//Better Approach:
//1. Find middle
//2. Reverse the right half
//3. Merge left and right O(n), O(1) - space