/**
 * Given a dictionary of words and a string made up of those words (no spaces),
 * return the original sentence in a list. If there is more than one possible
 * reconstruction, return any of them. If there is no possible reconstruction, 
 * hen return null.
 * 
 * For example, given the set of words 'quick', 'brown', 'the', 'fox', and the
 * string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
 * 
 * Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the
 * string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or
 * ['bedbath', 'and', 'beyond'].
 */

import * as assert from 'assert'

type Dictionary = {
  [k: string]: string[]
}

function reconstruct(dictionary: Dictionary, str: string): string[] | null {
  const [char] = str
  if (dictionary[char]) {
    for (const word of dictionary[char]) {
      if (str === word) {
        return [word]
      } else if (str.startsWith(word)) {
        const ret = reconstruct(dictionary, str.substr(word.length))
        if (ret) {
          return [
            word,
            ...ret
          ]
        }
      }
    }
  }
  return null
}

function constructDictionary(possibleWords: string[]) {
  const dict: Dictionary = {}
  for (const word of possibleWords) {
    const [char] = word
    if (!dict[char]) dict[char] = []
    dict[char].push(word)
  }
  return dict
}

assert.deepEqual(
  reconstruct(
    constructDictionary(['quick', 'brown', 'th', 'the', 'fox']),
    'thequickbrownfox'
  ),
  ['the', 'quick', 'brown', 'fox']
)