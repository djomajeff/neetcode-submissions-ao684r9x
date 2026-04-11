class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => 
    `${str.length}#${str}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = [];

        while (i < str.length) {
            let j = i;

            // find #
            while (str[j] !== '#') {
                j++;
            }

            // get length of the next string
            const length = Number(str.substring(i, j));

            const start = j + 1;
            const end = start + length;

            // get next string
            const word = str.substring(start, end)
            
            // push word to the array
            result.push(word)

            i = end;
        }

        return result
    }
}
