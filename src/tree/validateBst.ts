import { TreeNode } from "./trimBst";

function isValidBST(root: TreeNode | null): boolean {
    if(root === null ||(root.left === null && root.right === null)) return true;
    return helper(root, root.right) && helper(root, root.left);
};

function helper(prev: TreeNode, curr: TreeNode): boolean{
    if(curr === null ||(curr.left === null && curr.right === null)) return true;
    if(curr.left) {
        if(curr.left.value >= curr.value || curr.left.value >= prev.value) return false;
    }
    if(curr.right) {
        if(curr.right.value <= curr.value || curr.right.value <= prev.value) return false;
    }
    return isValidBST(curr.left) && isValidBST(curr.right);

}