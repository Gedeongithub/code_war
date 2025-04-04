const drawStairs =n=> {
    let space =""
    let m = ''
  for(let i = 1; i<= n; i++){
    
     space = ' '.repeat(i) + "i"
    m=m+space +"\n"
    
}
  return m
}

