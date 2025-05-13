Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
    return a.every(element=> this.includes(element)) ;
  } } );