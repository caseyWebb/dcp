/**
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the
 * number of ways it can be decoded.
 * 
 * For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 */

/**
 * NOTES:
 * 
 * - any single digit (0-9)
 * - any 1 and the next digit
 * - any 2 followed by 0-6
 * - any 0 *must* be paired with the prior number
 */

import * as assert from 'assert'

function solve(encoded: number): number {
  let numSolutions = 1
  let prev = Infinity

  for (const char of encoded.toString()) {
    const digit = parseInt(char, 10)
    if (digit === 0) numSolutions--
    if (prev === 1) numSolutions++
    if (prev === 2 && digit <= 6) numSolutions++
    prev = digit
  }

  return numSolutions
}

assert.equal(solve(111), 3)
assert.equal(solve(133), 2)
assert.equal(solve(20202), 1)