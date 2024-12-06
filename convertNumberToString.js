String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase();
  }
  
  
  console.log("5".isUpperCase())