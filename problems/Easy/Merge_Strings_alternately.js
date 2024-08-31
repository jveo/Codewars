/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2){
    let arr = []
    for (let i = 0; i < Math.max(word1.length,word2.length); i++) {
        arr.push(word1[i])
        arr.push(word2[i])
    }
    return arr.join("")
};
console.log(mergeAlternately("abc", "pqr"));
