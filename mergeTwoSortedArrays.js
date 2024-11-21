
const mergeArrays = (arr1,arr2) => {
    let arr3 = arr1.concat(arr2);
  
    return [...new Set(arr3)].sort((a,b)=> a-b)
}
