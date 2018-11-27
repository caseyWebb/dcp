-- Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
-- 
-- For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
-- 
-- Follow-up: what if you can't use division?

import qualified Data.List as List
import qualified Data.Map as Map
import qualified Data.Set as Set

solve :: Integral a => [a] -> [a]
solve numbers =
  let product = List.product numbers
      getProductExcluding = div product
  in List.map getProductExcluding numbers

solveBonus :: Integral a => [a] -> [a]
solveBonus xs =
  Map.elems (List.foldl reducer (createAccumulator xs) xs)

createAccumulator :: Integral a => [a] -> Map.Map a a
createAccumulator xs =
  Map.fromSet (\_ -> 1) (Set.fromList xs)

reducer :: Integral a => Map.Map a a -> a -> Map.Map a a 
reducer accum x =
  Map.mapWithKey (multiplyByIfNotSelf x) accum
  
multiplyByIfNotSelf :: Integral a => a -> a -> a -> a
multiplyByIfNotSelf x k v
  | k == x = v
  | otherwise = x * v