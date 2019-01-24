/**
 * Given an array of time intervals (start, end) for classroom lectures
 * (possibly overlapping), find the minimum number of rooms required.
 * 
 * For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
 */

import * as assert from 'assert'

/**
 * This algorithm is imperfect and may fail with very packed schedules where rooms
 * can't be scheduled greedily into the first available room.
 */

function solve(intervals: Array<[number, number]>) {
  const rooms: boolean[][] = [[]]

  for (const [start, end] of intervals) {
    let firstEmptyRoom = rooms.find((r) => !r.slice(start, end).includes(true))
    if (!firstEmptyRoom) {
      firstEmptyRoom = []
      rooms.push(firstEmptyRoom)
    }
    for (let i = start; i < end; i++) {
      firstEmptyRoom[i] = true
    }
  }
  
  // logSchedule(rooms)
  return rooms.length
}

// function logSchedule(rooms: boolean[][]) {
//   for (const room of rooms) {
//     for (const timeslot of room) {
//       process.stdout.write(timeslot ? 'X' : ' ')
//     }
//     process.stdout.write('\n')
//   }
// }

assert.equal(
  solve([
    [30, 75],
    [0, 50],
    [60, 150],
    [75, 100]
  ]),
  2
)