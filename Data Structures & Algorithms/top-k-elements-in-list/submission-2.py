import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        heap = []
        freq = {}

        for num in nums:
            freq[num] = freq.get(num, 0) + 1;
        
        for num in freq:
            heapq.heappush(heap, (freq[num], num))
            if len(heap) > k:
                heapq.heappop(heap)

        return [pair[1] for pair in heap]
        
