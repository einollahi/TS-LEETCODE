function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i]

    if (map.has(res)) {
      return [map.get(res) as number , i];
    }

    map.set(nums[i], i);
  }

  return [] satisfies number[];
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
