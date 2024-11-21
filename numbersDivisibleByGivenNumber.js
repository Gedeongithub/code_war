function divisibleBy(num,divisor){
  let arr2 = [];
  for(let i = 0; i< num.length; i++){
  
    if(num[i] % divisor === 0){
      arr2.push(num[i]);
    }
  }
  return arr2;

}
console.log(divisibleBy([1, 9, 3, 4, 5, 6],2));