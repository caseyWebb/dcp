
// code golf version
export const solveGolf = (a: number[], k: number) => !!a.find((x, i) => a.includes(k - x, i + 1))

// perf version (same algorithm as Haskell solution)
export const solveFast = (arr: number[], k: number) => {
  const s = new Set()
  for (const n of arr) {
    if (s.has(n)) return true
    s.add(k - n)
  }
  return false
}