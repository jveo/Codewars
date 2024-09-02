/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //sort the vowels into its own datastructure
    let v =[
        "a",
        "i",
        "e",
        "o",
        "u",
        "A",
        "I",
        "E",
        "O",
        "U"
    ]
    let i = 0
    let ans = ""
    let vowels = ""
    //get the vowels from s into its own vowel string
    for (let i = 0; i < s.length; i++) {
        if(v.includes(s[i])){
            vowels += s[i]
        }
    }

    //reverse the vowels
    vowels = vowels.split("").reverse().join("")

    console.log(vowels);
    
    //iterate over s to see 
    for (const c of s) {
         //if vowels contains s[i]
        if (v.includes(c)) {
            //add the vowel at the first index since we reversed it and it should be in order now
            ans += vowels[i]
            i++
        // else just add the non vowel to the ans string
        } else {
            ans += c
        }
    }

    return ans 
};

console.log(reverseVowels("hello"));
