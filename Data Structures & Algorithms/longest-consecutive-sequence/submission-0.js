class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const visited = new Set();
        const unique = new Set(nums);
        const hashMap = {};

        for (let i=0; i<nums.length; i++) {
            hashMap[nums[i]] = i;
        }


        let i = 0;
        let maxLength = 0;

        while (i < nums.length) {
            if (visited.has(nums[i])) {
                i++;
                continue;
            }

            visited.add(nums[i]);

            let j = i;
            let currLength = 1;
            while (unique.has(nums[j] + 1)) {
                currLength++;
                j = hashMap[nums[j] + 1]
            }

            maxLength = Math.max(currLength, maxLength)
            i++;
        }

        return maxLength;
    }
}
