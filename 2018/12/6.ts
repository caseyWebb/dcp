/**
 * Implement an autocomplete system. That is, given a query string s and a set
 * of all possible query strings, return all strings in the set that have s as a
 * prefix.
 *
 * For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
 */

import * as assert from 'assert'

function solve(query: string, dictionary: string[]) {
  // this feels like cheating but whatever
  return dictionary.filter((entry) => entry.startsWith(query))
}

assert.deepEqual(solve('de', ['dog', 'deer', 'deal']), ['deer', 'deal'])