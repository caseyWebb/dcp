/**
 * You run an e-commerce website and want to record the last N order ids in a
 * log.
 * 
 * Implement a data structure to accomplish this, with the following API:
 * 
 * record(order_id): adds the order_id to the log
 * get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
 * 
 * You should be as efficient with time and space as possible.
 */

import * as assert from 'assert'

export class RotatingLog<T = any> {
  private _log: T[]
  private _index = 0

  constructor(private _size: number) {
    this._log = new Array(_size)
  }

  record(orderId: any) {
    this._log[this._index] = orderId
    this._index = (this._index + 1) % this._size
  }

  getLast(i: number = 1) {
    return this._log[(this._index - i + this._size /* uncomment for zero-based indexing 1 */) % this._size]
  }
}

const log = new RotatingLog<string>(3)

log.record('foo')
log.record('bar')
log.record('baz')
log.record('qux')

assert.equal(log.getLast(1), 'qux')
assert.equal(log.getLast(2), 'baz')
assert.equal(log.getLast(3), 'bar')
