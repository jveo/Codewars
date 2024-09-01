/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2){
    if(str1+str2!==str2+str1) return ""
    return str1.substring(0, gcd(str1.length, str2.length))
}

function gcd(a,b){
    while(b!==0){
        let t = b
        b = a%b
        a = t
    }
    return a
}

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("ABCDEF", "ABC"));
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"));

