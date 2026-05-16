import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}

        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        
        sorted_entries = sorted(freq.items(), key=lambda item: item[1], reverse=True)

        sorted_keys = [item[0] for item in sorted_entries]

        return sorted_keys[:k]
            
        
