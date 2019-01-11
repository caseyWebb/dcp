/**
 * The area of a circle is defined as πr^2.
 * 
 * Estimate π to 3 decimal places using a Monte Carlo method.
 */

import * as assert from 'assert'

function solve(): number {
  const resolution = 10000
  let inside = 0

  for (let x = 0; x < resolution; x++) {
    for (let y = 0; y < resolution; y++) {
      if (Math.hypot(x, y) < resolution) {
        inside++
      }
    }
  }

  return 4 * (inside / resolution ** 2)
}

assert.equal(solve().toString().substr(0, 5), '3.141')