const findAverage = array => {
    return array.length === 0 ? 0 : array.reduce((acc, curr) => acc + curr, 0) / array.length;
  }