function highAndLow(numbers) {
    let numArray = numbers.split(' ').map(Number); 
    return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
  }
  