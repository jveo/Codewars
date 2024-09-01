/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies)
    let ans = []
    for (let i = 0; i < candies.length; i++) {
        if (candies[i]+extraCandies>=max) {
            console.log(candies[i]+extraCandies);
            ans.push(true)
        } else {
            console.log(candies[i]+extraCandies);
            ans.push(false)
        }
    }
    return ans
};
// candies = [2,3,5,1,3], extraCandies = 3
console.log(kidsWithCandies([2,3,5,1,3], 3));
