function twoSum(numbers: number[], target: number): number[] | undefined {
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    const potentialTarget = numbers[left] + numbers[right];

    if (potentialTarget > target) {
      right--;
    } else if (potentialTarget < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
};