function compareTriplets(a, b) {
    var alice = 0
    var bob = 0

    if(a.length < b.length){
        var dif = Math.abs(a.length - b.length)
        for (let i = 0; i < dif; i++) {
            a.push(0)
        }
    } else if(a.length > b.length){
        var dif = Math.abs(a.length - b.length)
        for (let i = 0; i < dif; i++) {
            b.push(0)
        }
    } 

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if(a[i] > b[i]){
            alice += 1
        } else if(a[i] < b[i]){
            bob +=1 
        }
    }
    return [alice,bob]
}

console.log(compareTriplets([17,28,30], [99,16,8]))
