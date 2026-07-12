class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        unique = set(nums)
        hash_map = {}
        n = len(nums)

        for i in range(n):
            hash_map[nums[i]] = i

        i = 0
        maxLength = 0

        while i < n:
            j = i
            currLength = 1
            while nums[j] + 1 in unique:
                currLength += 1
                j = hash_map[nums[j] + 1]
            
            maxLength = max(maxLength, currLength)
            i += 1

        return maxLength