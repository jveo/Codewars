function diagonalDifference(arr) {
    let rtl= []
    let ltr= []
    let sr = 0
    let sl = 0
    let j = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        rtl.push(arr[i][i])
        ltr.push(arr[i][j])
        j--
        sr += rtl[i]
        sl += ltr[i]
    }
    return Math.abs(sl-sr) 
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]))