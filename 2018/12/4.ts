/**
 * Given a list of integers, write a function that returns the largest sum of
 * non-adjacent numbers. Numbers can be 0 or negative.
 * 
 * For example,
 * 
 * [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
 * 
 * [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * 
 * Follow-up: Can you do this in O(N) time and constant space?
 */

import * as assert from 'assert'

function getLargestNonAdjacentSum(arr: number[]) {
  for (let i = 2; i < arr.length; i++) {
    const n = Math.max(arr[i], 1) // treat zero and negatives like 1, since it can just be skipped anyway
    if (i === 2) {
      arr[i] = n + arr[i - 2]
      continue
    }
    arr[i] += Math.max(arr[i - 2], arr[i - 3])
  }
  return Math.max(arr[arr.length - 1], arr[arr.length - 2])
}

assert.equal(getLargestNonAdjacentSum([2, 4, 6, 2, 5]), 13)
assert.equal(getLargestNonAdjacentSum([5, 1, 1, 5]), 10)