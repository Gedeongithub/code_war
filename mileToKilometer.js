function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    let Km = 1.609344;
    let lit = 4.54609188
    return Math.floor((mpg * (Km/lit))*100)/100
  }