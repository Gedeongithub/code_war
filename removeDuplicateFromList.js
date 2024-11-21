function distinct(number){
    let arr2 = number.filter((num, index) => number.indexOf(num) === index)
    return arr2;
    }
    console.log(distinct([1, 2, 1, 1, 3, 2]))