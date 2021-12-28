export default function checkIsSameTree(treeA, treeB) {
    if(!treeA && !treeB) return true

  return (treeA.value == treeB.value &&
    checkIsSameTree(treeA.right,treeB.right) &&
    checkIsSameTree(treeA.left,treeB.left)
    );
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

console.log(checkIsSameTree(tree, tree)); // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true