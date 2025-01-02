class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    
    }
    get info (){
      return `${this.name}s age is ${this.age}`;
    }
  }
  
  const p = new Person('Johns',23)
  console.log(p.info)