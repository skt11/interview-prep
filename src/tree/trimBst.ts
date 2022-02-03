
// Definition for a binary tree node.
export class TreeNode {
     value: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.value = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
}
 

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {

    if(root === null) return root;

    if(root.value > high) return trimBST(root.left, low, high)
    if(root.value < low) return trimBST(root.right, low, high)

    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high)

    return root;
};