class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};

        for (let i=0; i<nums.length; i++) {
            if (target - nums[i] in hash) {
                return [i, hash[target - nums[i]]]
            }
            hash[nums[i]] = i
        }

        return [];
    }
}
