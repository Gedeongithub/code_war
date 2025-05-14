const countPositivesSumNegatives =(input) =>{
    if(!input ||input.length === 0) return [];
    let positive = 0;
    let sum =0;
    for(const num of input){
      if(num > 0){
          positive++
      } else if(num<0){
          sum+=num
      }
    }
    return [positive,sum]
    
  }