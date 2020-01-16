/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定 nums = [2, 7, 11, 15], target = 9
 */
const nums = [11, 15, 2, 7, 11, 15];
// const nums = [3,2,4];
const target = 9;

// 执行用时 :328 ms，消耗内存：35.2M,时间复杂度O(n*n)
const twoSum = function(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(i != j && nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};


// 执行用时 :84 ms，消耗内存：35.7M,时间复杂度O(n)
const twoSum2 = function(nums: number[], target: number) {
  const list = new Map();
  for(let i = 0; i < nums.length; i++) {
    const v = target - nums[i];
    if(!list.has(nums[i])) list.set(v, i);
    else return [list.get(nums[i]),i]
  }
};

const p = twoSum2(nums, target);
// console.log(p)

export default p;
