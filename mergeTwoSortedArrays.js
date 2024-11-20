
const mergeArrays = (arr1,arr2) => {
    let arr3 = arr1.concat(arr2);
    return [...new Set(arr3)].sort()
}
console.log(mergeArrays([2,3,3,1,4],[5,4,3]));