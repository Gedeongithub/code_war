
const wave = str =>{
    let waved =[];
    for(let i = 0; i<str.length;i++){
        if(str[i]==' ') continue;
        let temp = str.split('');
        temp[i] =temp[i].toUpperCase();
    
        waved.push(temp.join(''))
    }
    return waved
}