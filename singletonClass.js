const Person = new class {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get fullName(){
        return `${this.name}, ${this.age}`;
    }
}('Aline',34);

console.log(Person.fullName);