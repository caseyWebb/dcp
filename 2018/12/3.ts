/**
 * A unival tree (which stands for "universal value") is a tree where all nodes
 * under it have the same value.
 *
 * Given the root to a binary tree, count the number of unival subtrees.
 *
 * For example, the following tree has 5 unival subtrees:
 *
 *   0
 *  / \
 * 1   0
 *    / \
 *   1   0
 *  / \
 * 1   1
 *
 */

import * as assert from 'assert'

class Node {
  constructor(public val: number, public left?: Node, public right?: Node) {}

  public getNumUnivalTrees(): number {
    const [_, numUnivalSubtrees] = this._recur()
    return numUnivalSubtrees
  }

  private _recur(): [boolean, number] {
    if (!this.left && !this.right) {
      return [true, 1]
    }
    if (this.left && this.right) {
      const [leftIsUnival, numLeftTrees] = this.left._recur()
      const [rightIsUnival, numRightTrees] = this.right._recur()
      const selfIsUnival =
        leftIsUnival &&
        rightIsUnival &&
        this.val === this.left.val &&
        this.val === this.right.val
      return [
        selfIsUnival,
        numLeftTrees + numRightTrees + (selfIsUnival ? 1 : 0)
      ]
    }
    const subtree = this.left || this.right as Node
    const [subtreeIsUnival, numUnivalSubtrees] = subtree._recur()
    const selfIsUnival = subtreeIsUnival && this.val === subtree.val
    return [
      selfIsUnival,
      numUnivalSubtrees + (selfIsUnival ? 1 : 0)
    ]
  }
}

const tree = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
)

assert.equal(tree.getNumUnivalTrees(), 5)
