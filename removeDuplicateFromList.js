let arr = [1, 2, 1, 1, 3, 2];
function distinct(number, position){
    return arr.indexOf(number) === position;
}
let arr2 = arr.filter(distinct)
console.log(arr2);