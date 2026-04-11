class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = {};

        for (const word of strs) {
            const sortedWord = word.split("").sort().join("")
            if (!(sortedWord in count)) count[sortedWord] = []
            count[sortedWord].push(word)
        }

        return Object.values(count);
    }
}
