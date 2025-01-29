const nextIds=ids=>{
    let id =0
    while(ids.includes(id)){
        id++
    }
    return id
}