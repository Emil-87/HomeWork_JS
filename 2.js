// Задача 2
// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека
// и выводит приветствие, 
// используя переданное ей имя, в консоль.


function Grettings() {
    let name = prompt('Привет, как тебя зовут?');
    msg = `Как дела ${name}, как жизнь?`
    alert(msg)
};

Grettings();
console.log(msg); 