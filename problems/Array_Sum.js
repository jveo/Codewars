function simpleArraySum(ar) {
    ans = 0;
    if(ar.length <= 0){
        return "empty array"
    }
    for (let i = 0; i < ar.length; i++) {
        ans += ar[i]
    }
    console.log(ans);
    return ans
}