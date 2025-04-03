const periodIsLate =(last, today, cycleLength)=> {
    let difference = (today - last )/86400000
    return difference > cycleLength
  }