function aVeryBigSum(ar){
    let res = 0
    for (let i = 0; i < ar.length; i++) {
        const n = ar[i];
        res += n 
    }
    return res
}
aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
