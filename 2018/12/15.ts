/**
 * Given two singly linked lists that intersect at some point, find the
 * intersecting node. The lists are non-cyclical.
 * 
 * For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return
 * the node with value 8.
 * 
 * In this example, assume nodes with the same value are the exact same node objects.
 * 
 * Do this in O(M + N) time (where M and N are the lengths of the lists) and
 * constant space.
 */

import * as assert from 'assert'

class LinkedList {
  public next?: LinkedList

  constructor(public value: number) {}

  public add(n: number) {
    this.next = new LinkedList(n)
    return this.next
  }

  public sum() {
    let s = 0
    let node: LinkedList | undefined = this
    while (node) {
      s += node.value
      node = node.next
    }
    return s
  }

  public toString() {
    const arr = []
    let node: LinkedList | undefined = this
    while (node) {
      arr.push(node.value)
      node = node.next
    }
    return arr.toString()
  }

  public static fromArray(nums: number[]) {
    const [first, ...rest] = nums
    const head = new LinkedList(first)
    let node = head
    for (const n of rest) {
      node = node.add(n)
    }
    return head
  }

  public static intersects(a: LinkedList, b: LinkedList): number {
    let aSum = a.sum()
    let bSum = b.sum()

    while (true) {
      // console.log('a', aSum, '\t', a.toString())
      // console.log('b', bSum, '\t', b.toString())
      // console.log()

      if (aSum > bSum) {
        aSum -= a.value
        if (!a.next) break
        a = a.next
      } else if (aSum < bSum) {
        bSum -= b.value
        if (!b.next) break
        b = b.next
      } else {
        const ret = a.value
        while (a.value === b.value && a.next && b.next) {
          aSum -= a.value
          bSum -= b.value
          a = a.next
          b = b.next
        }
        if (!a.next && !b.next) return ret
      }
    }

    return NaN
  }
}

const listA = LinkedList.fromArray([3, 7, 2, 4, 6, 8, 10, 6, 8, 10])
const listB = LinkedList.fromArray([99, 1, 2, 6, 4, 8, 10])

assert.equal(LinkedList.intersects(listA, listB), 8)
