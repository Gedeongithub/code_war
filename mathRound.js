Math.roundTo = function(number, precision) {
    let factor = Math.pow(10, precision); 
    return Math.round(number * factor) / factor; 
  };