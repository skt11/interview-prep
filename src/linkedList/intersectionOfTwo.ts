function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    const nodeSet = new Set<ListNode>()

    let pointerA = headA;
    let pointerB = headB;

    while(pointerA || pointerB){
        
        if(pointerA){
            if(nodeSet.has(pointerA)) return pointerA;
            nodeSet.add(pointerA)
            pointerA = pointerA.next;
        }
        if(pointerB){
            if(nodeSet.has(pointerB)) return pointerB;
            nodeSet.add(pointerB)
            pointerB = pointerB.next
        } 
    }
    return null
};

//Approach 2:
//Make headA a cycle
//find cycle in headB
//remove cycle
//return the point of cycle in headB

//Best :
// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     if (headA == null || headB == null) {
//         return null
//     }
    
//     let currentA = headA;
//     let currentB = headB;
    
//     while(currentA !== currentB) {
//         if (currentA == null) {
//             currentA = headB;
//         } else {
//             currentA = currentA.next;
//         }
        
//         if (currentB == null) {
//             currentB = headA;
//         } else {
//             currentB = currentB.next;
//         }
//     }   
    
//     return currentA;
// };