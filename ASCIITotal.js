function uniTotal (string='') {
    let arr = string.split('')
    let sum = 0
    for(let i of arr){
      sum+=i.charCodeAt(0)
    }
    return sum
    }
    console.log(uniTotal('Gedeon'))
    