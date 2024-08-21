export function findSubstring(s,k) {
    let stringArr = []
    let vowelCountArr = []
    var i = 0
    var ans
    var highestNum = 0
    var highestIndex

    while(i<=s.length - k){
        var substr = s.substr(i,k)

        stringArr.push(substr)
        vowelCountArr.push(countVowels(substr))

        if(countVowels(substr) == 0){
            return "Not found!"
        }

        highestNum = Math.max(highestNum, vowelCountArr[i])
        highestIndex = vowelCountArr.findIndex( v => v == highestNum)

        ans = stringArr[highestIndex]
        i++
    }
    console.log(ans);
}

function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if(vowels.includes(letter)){
            count++
        } 
     }
    return count
}