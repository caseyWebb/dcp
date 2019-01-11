import * as assert from 'assert'

/**
 * 
 * Given an integer k and a string s, find the length of the longest substring
 * that contains at most k distinct characters.
 * 
 * For example, given s = "abcba" and k = 2, the longest substring with k
 * distinct characters is "bcb".
*/

function solve(str: string, maxDistinct: number): number {
  let maxFound = 0
  let currentSubstring = ''

  for (const char of str) {
    if (currentSubstring.length < maxDistinct || currentSubstring.includes(char)) {
      currentSubstring += char
    } else {
      const [leadingChar] = currentSubstring
      const tailStartIndex = currentSubstring.lastIndexOf(leadingChar) + 1
      currentSubstring = currentSubstring.substring(tailStartIndex) + char
    }
    maxFound = Math.max(maxFound, currentSubstring.length)
  }

  return maxFound
}

assert.equal(solve('abcba', 2), 3) // bcb