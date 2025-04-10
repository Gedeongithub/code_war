const solve =(num)=>{
    let max = -Infinity;
    let dominant = num.slice().reverse().filter(n=>{
        if(n>max){
            max=n;
            return true;
        }
        return false;
    })
    return dominant.reverse();
}