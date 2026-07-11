class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        hash_map = {
            '(': ')',
            '{': '}',
            '[':  ']'
        }

        for char in s:
            if char in hash_map:
                stack.append(char)
            else:
                if len(stack) == 0 or char != hash_map[stack.pop()]:
                    return False

        return len(stack) == 0