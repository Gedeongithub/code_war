const polydivisible =x=> {
    let str = String(x)
    for(let i = 1;i<=str.length;i++){
        let prefix = Number(str.slice(0,i))
        if(prefix %i !==0){
            return false;
        }
    }
  return true;
}