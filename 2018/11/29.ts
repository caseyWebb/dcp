/**
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first
 * and last element of that pair. For example, car(cons(3, 4)) returns 3, and
 * cdr(cons(3, 4)) returns 4.
 *
 * Given this implementation of cons:
 * 
 *  def cons(a, b):
 *    def pair(f):
 *      return f(a, b)
 *    return pair
 *
 * Implement car and cdr.
 */

import * as assert from 'assert'

type Pair<TOut> = (f: (a: number, b: number) => TOut) => TOut

const cons: (a: number, b: number) => Pair<any> = (a, b) => (f) => f(a, b)

const car = (p: Pair<number>) => p((a) => a)
const cdr = (p: Pair<number>) => p((_, b) => b)

assert.equal(car(cons(3, 4)), 3)
assert.equal(cdr(cons(3, 4)), 4)
assert.equal(typeof cons(3, 4), 'function')