class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        buy_price = prices[0]

        for price in prices[1:]:
            if price >= buy_price:
                profit = max(profit, price - buy_price)
            else:
                buy_price = price
        
        return profit