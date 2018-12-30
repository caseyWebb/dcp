/**
 * Implement a job scheduler which takes in a function f and an integer n, and
 * calls f after n milliseconds.
 */

// this is trivial in JS w/ setTimeout, so I'll overengineer some just to be more
// in the spirit of the question

function schedule(fn: () => void, delayMS: number) {
  const start = process.hrtime();
  (function runIfReady() {
    const [elapsedSeconds, elapsedNanoseconds] = process.hrtime(start)
    const elapsedMilliseconds = elapsedNanoseconds * 1e-6 + elapsedSeconds * 1e3
    if (elapsedMilliseconds > delayMS) {
      fn()
    } else {
      setImmediate(runIfReady)
    }
  })()
}

schedule(() => console.log(1), 1000)
schedule(() => console.log(2), 2000)
schedule(() => console.log(3), 3000)
schedule(() => console.log(4), 4000)
schedule(() => console.log(5), 5000)