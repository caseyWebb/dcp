import qualified Data.List as List

-- There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

-- For example, if N is 4, then there are 5 unique ways:

--     1, 1, 1, 1
--     2, 1, 1
--     1, 2, 1
--     1, 1, 2
--     2, 2

-- NOTE: Thinking about this and some whiteboard reasoning revealed that the number
-- of solutions is equal to the nth fibonacci number. Easy peasy.

-- solve :: Integral a => a -> a
-- solve n
--   | n <= 2    = n
--   | otherwise = (solve (n - 1)) + (solve (n - 2))

solve :: Integral a => a -> a
solve = solveBonus [1, 2]

-- What if, instead of being able to climb 1 or 2 steps at a time,
-- you could climb any number from a set of positive integers X?
-- 
-- For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

solveBonus :: Integral a => [a] -> a -> a
solveBonus possibleClimbs numSteps
  | numSteps < 0  = 0
  | numSteps == 0 = 1
  | otherwise     = List.sum (List.map (\climb -> (recur (numSteps - climb))) possibleClimbs)
  where recur = solveBonus possibleClimbs