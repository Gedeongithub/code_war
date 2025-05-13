function isOpposite(s1, s2){
    if(!s1||!s2) return false;
    for(let i =0;i<s1.length;i++){
        if(s1[i].toLowerCase() !== s2[i].toLowerCase()) return true;
        if(s1!==s2) return false;
        return false
    }
  }