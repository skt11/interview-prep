import { TreeNode } from "./trimBst";

function inorderTraversal(root: TreeNode | null): number[] {
    const data = [];
    traverse(root, data);
    return data;
};

const traverse = (node: TreeNode, data: number[]) => {
    if(node === null) return;
    if(node.left) traverse(node.left, data)
    data.push(node.value)
    if(node.right) traverse(node.right, data)
}