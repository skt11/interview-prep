function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    const length = findLength(head);

    console.log(length)

    const idxToRemove = length-n-1;

    let i = 0;
    let curr = head;
    let prev = null;
    
    while(i !== idxToRemove){
        prev = curr;
        curr = curr.next;
        i++;
    }
    
    if( curr === head){
        let temp = head;
        head = head.next;
        temp = null
    } else{
        prev.next = curr.next;
        curr = null;
    }

    return head;

};

function removeNthFromEndTwoPointers(head: ListNode | null, n: number): ListNode | null {

    let curr = head;
    let delayedPointer = head;
    let prev = null;
    
    //Start the second pointer with a delay of n
    while(curr){
        if(n <= 0){
            prev = delayedPointer;
            delayedPointer = delayedPointer.next;
        }
        curr = curr.next;
        n--;
    }
    
    if( delayedPointer === head){
        let temp = head;
        head = head.next;
        temp = null
    } else{
        prev.next = delayedPointer.next;
        delayedPointer = null;
    }

    return head;

};

const findLength = (head: ListNode):number => {
    let curr = head;
    let length = 0;
    while(curr){
        curr = curr.next;
        length++;
    }
    return length;
}