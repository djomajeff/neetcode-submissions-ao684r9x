class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join(" ")
        // 2#hi4#word5#jeffy12#averylongwordokay
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const words = []
        let start = 0, i =0, end;

        console.log("encoded", str)
        while (i < str.length) {
            if (str[i] == '#') {
                const length = Number(str.slice(start, i))
                start = i + 1
                end = start + length
                words.push(str.slice(start, end))
                start = end
                i = end
            }
            i++
        }
        console.log("decoded", words)
        return words;
    }
}
