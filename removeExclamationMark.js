function remove (string) {
    const arr = string.split('')
    const arr2 = arr.filter(element=>element !== '!')
    arr2.push('!')
    let arr3 =arr2.join('')
    return arr3;  
  }