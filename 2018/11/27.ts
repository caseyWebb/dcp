import * as assert from 'assert'

class BinaryTreeNode {
  constructor(
    public val: string,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}

  public toObject() {
    const ret: any = { val: this.val }
    if (this.left) ret.left = this.left.toObject()
    if (this.right) ret.right = this.right.toObject()
    return ret
  }

  public static fromObject(obj: any): BinaryTreeNode {
    return new BinaryTreeNode(
      obj.val,
      obj.left && BinaryTreeNode.fromObject(obj.left),
      obj.right && BinaryTreeNode.fromObject(obj.right)
    )
  }
}

function serialize(tree: BinaryTreeNode): string {
  return JSON.stringify(tree)
}

function deserialize(str: string): BinaryTreeNode {
  return BinaryTreeNode.fromObject(JSON.parse(str))
}

function test() {
  const node = new BinaryTreeNode(
    'root',
    new BinaryTreeNode(
      'left',
      new BinaryTreeNode('left.left')
    ),
    new BinaryTreeNode('right')
  )

  const serialized = serialize(node)

  console.log(serialized)

  // @ts-ignore
  assert.equal(deserialize(serialized).left.left.val, 'left.left')
}

test()