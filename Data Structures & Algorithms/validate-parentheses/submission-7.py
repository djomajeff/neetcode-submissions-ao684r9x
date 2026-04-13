class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) == 0:
             return True

        stack = [s[0]]
        hash_map = {
            ']': '[',
            '}': '{',
            ')': '('
        }

        for char in s[1:]:
            if char in ['(', '{', '[']:
                stack.append(char)
            else:
                if len(stack) == 0 or stack.pop() != hash_map[char]:
                    return False
        
        return len(stack) == 0