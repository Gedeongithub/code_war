function solve(arr){
    let arr2 = new Array()
    let i = 0;
    while(i<arr.length){
        if(arr[i]>arr[i+1]){
            arr2.push(arr[i])
        }
        i++
    }
    arr2.push(arr[arr.length-1])
    let unique = [...new Set(arr2)]
    return unique
}