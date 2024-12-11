function squareSum(numbers){
    let sum =0;
   let addition=0
for (let i = 0; i<numbers.length; i++){
    sum =numbers[i]*numbers[i];
  addition += sum
}
return addition;
}