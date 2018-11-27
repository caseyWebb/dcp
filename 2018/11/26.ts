/**
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * 
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 */

export function solve(numbers: number[]) {
  const product = numbers.reduce((accum, n) => accum * n)
  return numbers.map((n) => product / n)
}

export function solveBonus(numbers: number[]) {
  const mapValues = (obj: { [k: string]: number }, fn: (k: number, n: number) => number) =>
    Object.keys(obj).reduce((accum, k) => ({
      ...accum,
      [k]: fn(parseInt(k, 10), obj[k])
    }), {})
  const accumulator = numbers.reduce((accum, n) => ({ ...accum, [n]: 1 }), {})
  const reducer = (accum: { [k: number]: number }, n: number) => mapValues(accum, (k, v) => k === n ? v : n * v)
  return Object.values(numbers.reduce(reducer, accumulator))
}

