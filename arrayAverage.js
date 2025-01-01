function findAverage(nums) {
    let avg =0
    for(let num of nums){
       avg+=num
    }
    return avg/nums.length
  }