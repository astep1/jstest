var age;
console.log(age); //undefined
age = 30;
console.log(age); //30

var $name = 'Ivan'; //лучше просто так не юзать $
var _name = 'Maks'; //лучше просто так не юзать _
//var 1name = 'test'; //Uncaught SyntaxError: Invalid or unexpected token

/*
    Hoisting
*/
//var car буд-то всплыла наверх 
console.log(car); //undefined
var car = 'BMW';
console.log(car); //BMW

/*
    Let
*/
console.clear(); //Console was cleared
let nickname = 'dmgame2';
console.log(nickname); //dmgame2

//hoisting у let не работает:)
//console.log(country); //Uncaught ReferenceError: Cannot access 'country' before initialization
let country = 'Hi';




console.clear();
/*
    const
*/
const user = {
    name: 'Artem',
    age: 30
};

user.age = 51;
console.log(user);