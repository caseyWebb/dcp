/**
 * Given an array of integers, find the first missing positive integer in linear time
 * and constant space. In other words, find the lowest positive integer that does not
 * exist in the array. The array can contain duplicates and negative numbers as well.
 * 
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * 
 * You can modify the input array in-place.
 */

import * as assert from 'assert'

function solve(arr: number[]) {
  arr = arr.filter((n) => n > 0)

  for (const n of arr) {
    if (n < arr.length && arr[n] > 0) arr[n] = -arr[n]
  }

  const res = arr.findIndex((n, i) => i > 0 && n > 0)

  return res === -1
    ? arr.length + 1
    : res
}

assert.equal(solve([3, 4, -1, 1]), 2)
assert.equal(solve([1, 2, 0]), 3)
assert.equal(solve([10, 20, 30, 40, 50]), 1)