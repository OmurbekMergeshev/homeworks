// console.log('Hello World')

// Регулярные выражения


// Флаги

// i Нерегистронезависимый поиск.


// let string = prompt('Enter your name...')
//
// const regExp = /n/i
//
// console.log(string.match(regExp))

// g	Глобальный поиск.

// const symbols = 'AaaaaBbbbbCcccDdddCcc'
//
// const regExp = /c/gi
//
// console.log(symbols.match(regExp))

// m	Многострочный поиск.
// y	Выполняет поиск начиная с символа, который находится на позиции свойства lastindex текущего регулярного выражения.



// const numbers = '123qwe123zf123sdf123sdf12sdf3'


// \w
// Соответствует любому цифробуквенному символу включая нижнее подчёркивание. Эквивалентен [A-Za-z0-9_].

// Например, /\d/ or /[0-9]/ соответствует '2' в "B2 is the suite number."
// const regExp = new RegExp('')
// const regExp = /[0-9]/g
// const regExp = /\w/g

// console.log(numbers.match(regExp))
// console.log(numbers.replace(regExp, '*'))

// DOM

const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

// \d
// Соответствует цифровому символу. Эквивалентно выражению [0-9].

// ^
// Соответствует началу ввода. Если установлен флаг многострочности, также производит сопоставление непосредственно после переноса строки.

// $
// Соответствует концу ввода. Если установлен битовый флаг многострочности, также сопоставляется содержимому до переноса строки.
const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.addEventListener('click', () => {
    // console.log(phoneInput.value)
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

// Рекурсия

// let num = 0
//
// const count = () => {
//     num++
//     console.log(num)
//     if (num < 500) {
//         count()
//     }
// }
// count()

// const peoples = {
//     John: {
//         age: 27,
//         parents: {
//             Nick: {
//                 age: 50,
//             },
//             Stella: {
//                 age: 48,
//                 parents: {
//                     Kelly: {
//                         age: 40,
//                         parents: {
//                             Kelly: {
//                                 age: 40,
//                                 parents: {
//                                     Kelly: {
//                                         age: 40
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     Dave: {
//         age: 25,
//         parents: {
//             Kelly: {
//                 age: 40
//             }
//         }
//     },
//     Chack: {
//         age: 25,
//         parents: {
//             Morgana: {
//                 age: 40
//             }
//         }
//     }
// }
//
// // console.log(peoples.John)
//
// const parentsList = (obj) => {
//     // console.log(obj)
//     if(obj.parents) {
//         for (let key in obj.parents) {
//             console.log(key)
//             parentsList(obj.parents[key])
//         }
//     } else {
//         console.log('...fail')
//     }
// }

// parentsList(peoples.John)

// for (let key in peoples) {
//     parentsList( peoples[key] )
// }

// parentsList(peoples.John)


// const obj = {
//     name: 'Nurdin',
//     age: 19,
//     isMarried: false
// }

// console.log(obj['age'])

// for (let key in obj) {
//     console.log(`Ключ объекта: ${key}, Значение Объекта: ${obj[key]}`)
// }