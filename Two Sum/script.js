function twoSum(nums, target) {
  const previousValues = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const neededValue = target - currentValue
    const solution = previousValues[neededValue]
    if ( solution != null) {
      return [previousValues[neededValue], i]
    } else {
      previousValues[currentValue] = i
    }
  }

	return []
}
