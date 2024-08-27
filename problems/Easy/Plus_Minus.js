function plusMinus(arr){
    let m = new Map()
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            m.set("+", m.has("+")?m.get("+")+1:1)
        } 
        if(arr[i] < 0){
            m.set("-", m.has("-")?m.get("-")+1:1)
        }
        if(arr[i] == 0){
            m.set("=", m.has("=")?m.get("=")+1:1)
        }
    }

    [...m.values()].sort((a,b) => b-a).forEach(v => {
        var ans = (v/arr.length).toFixed(6)
        console.log(ans);
    })
}

plusMinus([-4,3,-9,0,4,1])