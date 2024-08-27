var myAtoi = function(s) {
    let neg = false
    let pos = false
    let t = []
    let ans
    const MAX_32BIT_INT = 2147483647;
    s = s.trim()
    if(s.startsWith("-")){
        neg = true
        s = s.replace("-", "")
    }
    if(s.startsWith("+")){
        pos = true
        s = s.replace("+", "")
    }

    let i = 0
    while(Number.isInteger(parseInt(s[i]))){
        t.push(s[i])
        i++
    }
   
    if(neg && !pos){
        var x = Math.abs(t.join(""))
        var l = x>=MAX_32BIT_INT?MAX_32BIT_INT+1:x
        ans = "-" + l 
    } else if(neg && pos){
        return 0
    } else {
        var x = Math.abs(t.join(""))
        var l = x>=MAX_32BIT_INT?MAX_32BIT_INT:x
        ans = l
    }
    return ans
};

myAtoi("-91283472332")
myAtoi("   -042")
myAtoi('1337c0d3')
myAtoi('0-1')