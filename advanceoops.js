const prompt = require("prompt-sync")();

class person{
    constructor(name, id){
        this.name=name;
        this.id = id;
    }

    getDetails(){
        this.name = prompt("Enter the name in console terminal :");
        this.id = prompt("Enter the id number in console :");
    }
    showDetails(){
        return `Name is :  ${this.name} and your id is :  ${this.id}`;
    }
}
let a = new person()
a.getDetails()
console.log(a.showDetails());
