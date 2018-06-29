/*
2. # ДЗ - 2
Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
'source' - массив
'filterFn' - фильтрующая функция
Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'

Всё должно быть реализовано с использованием чистого js (не используя сторонние библиотеки).
Так же, нельзя использовать функции для работы с массивами.

    пример:
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
*/


let allNum = [1, 2, 3, 4, 5],
    someNum = [1, 2, 'text', 4, 6, 'text'],
    notNum = ['one', 'two', 'three'],
    emptyArr = [];


function isNumber(val) {
    return typeof val === 'number';
}


function isSomeTrue(source, fn) {
    try {
        if (source.length === 0) {
            throw new Error('Array is empty!');
        }
    }catch (e) {
        return e.message;
    }

    let isTrue = 0;
    let isFalse = 0;

    for (let i = 0; i < source.length; i++) {
        if (fn(source[i])) {
            isTrue++;
        } else {
            isFalse++;
        }
    }

    if (source.length === isFalse) {
        return false;
    }
    return true;
}

console.log(isSomeTrue(allNum, isNumber));
console.log(isSomeTrue(someNum, isNumber));
console.log(isSomeTrue(notNum, isNumber));
console.log(isSomeTrue(emptyArr, isNumber));
