"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
    // makeTest: function() {
    //     console.log("Test");
    // }
};
// options.makeTest();
// Создаем метод, который будет работать внутри options

// const {border, bg} = options.colors;
// console.log(border);
// Деструктуризация объекта, мы вытащили из него маленькие кусочки для удобства

// console.log(Object.keys(options).length);
// покажет сколько ключей в объекте

// console.log(options.["colors"]["border"]);
// Тут мы выводим именно значение black, путем обращений к разным ключам

// delete options.name;
// Удалит ключ-значение name
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);
// Этот кусок кода путем перебора ключей покажет какие свойства какие значения имеют и их кол-во