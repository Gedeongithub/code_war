function digitize(n) {
    let x = n
    return x.toString().split('').map(Number).reverse()
  }