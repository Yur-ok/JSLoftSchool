/*
1. # ДЗ 1:
Написать функцию '03', которая принимает 2 параметра - 'source' и 'filterFn'
source - массив
'filterFn' - фильтрующая функция
Если фильтрующая функция вернет 'true' для ВСЕХ элементов массива, то и сама '03' вернет 'true'
Если фильтрующая функция вернет 'false' хотя бы для одного элемента массива, то и сама '03' вернет 'false'

пример:
    var allNumbers = [1, 2, 4, 5, 6, 7, 8],
        someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
        noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
    return typeof val === 'number';
}

console.log(03(allNumbers, isNumber)); //вернет true
console.log(03(someNumbers, isNumber)); //вернет false
console.log(03(noNumbers, isNumber)); //вернет false

Выбрасывать и обрабатывать исключение, если в 'source' пустой массив.
*/


function isNumber(val) {
    return typeof val === 'number';
}

function 03(num, fn) {
    try {
        if (num.length === 0) {
            throw new Error('Array is empty!');
        }
    } catch (e) {
        return e.message;

    }

    let isTrue = 0;
    let isFalse = 0;

    for (let i = 0; i < num.length; i++) {
        if (fn(num[i])) {
            isTrue++;
        } else {
            isFalse++;
        }
    }

    if (num.length === isTrue) {
        return true;
    }
    return false;
}


let allNum = [1, 2, 3, 4, 5],
    someNum = [1, 2, 'text', 4, 6, 'text'],
    notNum = ['one', 'two', 'three'],
    emptyArr = [];


console.log(03(allNum, isNumber));
console.log(03(someNum, isNumber));
console.log(03(notNum, isNumber));
console.log(03(emptyArr, isNumber));
