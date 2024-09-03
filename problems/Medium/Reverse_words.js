/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = ""
    //add each word to an array
    let words = s.split(" ").filter(v => v.trim())
    //iterate over the array backwards 
    for (let i = words.length-1; i>=0; i--) {
        //add each word to a string with a " " between each iteration
        ans += words[i] + " "
    }
    //return ans
    return ans
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));
