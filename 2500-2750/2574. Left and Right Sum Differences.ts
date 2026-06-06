// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]

namespace bad_answer {
	export function leftRightDifference(nums: number[]) {

		const output: number[] = [];
		for (let i = 0; i < nums.length; i++) {

			if (i === 0) {
				output.push(sum(nums.slice(1)));
			} else if (i === nums.length - 1) {
				output.push(sum(nums.slice(0, nums.length - 1)));
			} else {
				const lefty = sum(nums.slice(0, i));
				const righty = sum(nums.slice(i + 1, nums.length));

				output.push(Math.abs(lefty - righty));
			}

		}
		
		return output;
	}

	const sum = (nums: number[]) => nums.reduce((a, b) => a + b, 0);
}


console.log(bad_answer.leftRightDifference([10, 4, 8, 3]));

namespace better_answer {
	export function leftRightDifference(nums: number[]) {
		const output: number[] = [];

		let lSum!: number;
		let rSum!: number;

		for (let i = 0; i < nums.length; i++) {
			if (i === 0) {
				lSum = 0;
				rSum = nums.slice(1).reduce((a, b) => a + b, 0);
			} else {
				lSum = lSum + nums[i-1];
				rSum = rSum - nums[i];
			}

			output.push(Math.abs(lSum - rSum));
		}

		return output;
	}
}

console.log(better_answer.leftRightDifference([10, 4, 8, 3]));
console.log(better_answer.leftRightDifference([1]));
