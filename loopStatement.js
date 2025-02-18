const pickIt = arr => {
    let odd = [], even = [];
    
    for (let num of arr) {
      num % 2 === 0 ? even.push(num) : odd.push(num);
    }
    return [odd, even];
  }