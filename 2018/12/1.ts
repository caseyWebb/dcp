/**
 * An XOR linked list is a more memory efficient doubly linked list. Instead of
 * each node holding next and prev fields, it holds a field named both, which is
 * an XOR of the next node and the previous node. Implement an XOR linked list;
 * it has an add(element) which adds the element to the end, and a get(index)
 * which returns the node at index.
 * 
 * If using a language that has no pointers (such as Python), you can assume you
 * have access to get_pointer and dereference_pointer functions that converts
 * between nodes and memory addresses.
 */

import * as assert from 'assert'

class FakeRAM {
  // still better than writing C...
  public static cells: any[] = []
  public static allocate(t: any) { this.cells.push(t) }
  public static dereferencePointer(ptr: number) { return this.cells[ptr] }
  public static getPointer(t: any) { return this.cells.indexOf(t) }
}

class XORLinkedList<T> {
  public head?: XORNode<T>
  public tail?: XORNode<T>

  public add(v: T) {
    const node = new XORNode(v)
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      node.both = FakeRAM.getPointer(this.tail)
      this.tail.both = this.tail.both ^ FakeRAM.getPointer(node)
      this.tail = node
    }
  }

  public get(i: number) {
    let node = this.head
    let prevPtr = 0
    while (i-- > 0) {
      if (!node) throw new Error()
      const ptr = node.both ^ prevPtr
      prevPtr = FakeRAM.getPointer(node)
      node = FakeRAM.dereferencePointer(ptr)
    }
    if (!node) throw new Error()
    return node.value
  }
}

class XORNode<T> {
  public both = 0
  constructor(public value: T) {
    FakeRAM.allocate(this)
  }
}

const list = new XORLinkedList<number>()

list.add(1)
list.add(2)
list.add(3)
list.add(5)
list.add(7)
list.add(11)
list.add(13)
list.add(17)
list.add(19)

assert.equal(list.get(6), 13)