class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq = {}
        for (const letter of s) {
           freq[letter] = (freq[letter] ?? 0) + 1
        }

        for (const letter of t) {
            if (!(letter in freq) || freq[letter] == 0) return false;

            freq[letter]--;
        }

        return true;

    }
}
