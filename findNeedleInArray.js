function findNeedle(haystack) {
    for (const [index,element]of haystack.entries()){
        if(element == 'needle'){
            return `found the ${element} at position ${index}`
        }
    }
  }