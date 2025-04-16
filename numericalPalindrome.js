function palindrome(num){
    if(typeof num !== 'number'|| num<0 || !Number.isInteger(num)){
        return 'Not valid';
    };
    let found = new Set()
    const string = String(num);
    // console.log(string);
    for(let i =0; i<string.length; i++){
        for (let j = i+2; j<=string.length; j++){
            let part = string.slice(i,j)
           if(part[0]=='0'||part[part.length-1]=='0') continue;
           if(part==part.split('').reverse().join('')){
           found.add(Number(part));
           }
           
        }
    }
    if (found.size === 0){
        return 'No palindromes found';
    };
    return [...found].sort((a,b)=>a-b)
}

console.log(palindrome(2332));