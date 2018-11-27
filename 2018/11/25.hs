-- Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
--
-- For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
--
-- Bonus: Can you do this in one pass?

import qualified Data.Set as Set

solve :: Integral a => a -> [a] -> Bool
solve = solve' Set.empty

solve' :: Integral a => Set.Set a -> a -> [a] -> Bool
solve' _ _ [] = False
solve' possibleAddends targetSum (x:xs)
  | Set.member x possibleAddends = True
  | otherwise = solve' (Set.insert addend possibleAddends) targetSum xs
  where addend = targetSum - x
