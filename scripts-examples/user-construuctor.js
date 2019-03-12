//Использование функций для создания объекта

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.greeting = () => {
     console.log(this.name)
    };
    this.age = () => {
        return new Date().getFullYear() - this.birthday
    }

}

let OlenaTaras = new User('Olena', 2002);
let VasylPupkin = new User('Vasyl', 2004);

console.log(OlenaTaras);
console.log(VasylPupkin);
console.log(OlenaTaras instanceof User);
OlenaTaras.greeting();
console.log(VasylPupkin.age());




