class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        unique = set(nums)
        hash_map = {}
        visited = set()
        n = len(nums)

        for i in range(n):
            hash_map[nums[i]] = i

        i = 0
        maxLength = 0

        while i < n:
            if nums[i] in visited:
                i += 1
                continue

            visited.add(nums[i])

            j = i
            currLength = 1

            while nums[j] + 1 in unique:
                visited.add(nums[j] + 1) 
                currLength += 1
                j = hash_map[nums[j] + 1]
                
            
            maxLength = max(maxLength, currLength)
            i += 1

        return maxLength