/*
3. # ДЗ 3 (со звездочкой)
Написать функцию 'calculator' (в виде модуля), которая имеет один параметр - 'firstNumber'
'firstNumber' - это число, с которым будут производиться действия
Функция 'calculator' должна возвращать объект, у которого должно быть несколько функций.
Каждая из этих функций принимает неограниченное количество аргументов и производит какие-то арифметические операции
с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
- 'sum' - складывает 'firstNumber' с переданным аргументами
- 'dif' - вычитает из 'firstNumber' переданные аргументы
- 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный
аргумент (если он есть) и так далее
- 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный
 аргумент (если он есть) и так далее.
Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю

пример:
    var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400
*/


function calculator(num) {
    let obj = {
        sum: function () {
            let res = num;
            for (let i = 0; i < arguments.length; i++) {
                res += arguments[i];
            }
            return res;
        },
        dif: function () {
            let res = num;
            for (let i = 0; i < arguments.length; i++) {
                res -= arguments[i];
            }
            return res;
        },
        div: function () {
            let res = num;

            try {
                for (let i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== 0) {
                        res /= arguments[i];
                    } else {
                        throw new Error("На ноль делить нельзя");
                    }
                }

            } catch (e) {
                console.log(e.message);
            }
            return res;
        },
        mul: function () {
            let res = num;
            for (let i = 0; i < arguments.length; i++) {
                res *= arguments[i];
            }
            return res;
        }
    };

    return obj;
}

let myCalc = calculator(100);

console.log(myCalc.sum(1, 2, 4));
console.log(myCalc.dif(10, 20, 40));
console.log(myCalc.div(2, 2, 0));
console.log(myCalc.mul(1, 2, 4));
