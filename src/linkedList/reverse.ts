
//  Definition for singly-linked list.
 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }
 

 function reverseList(head: ListNode | null): ListNode | null {

    if(!head || head.next === null) return head;
    
    let first =  head;
    let second =  head.next;
    let temp: ListNode = null;
    while(second){
        temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    return first;
};