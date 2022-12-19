// function- declaration
// function  validateINN(inn) {
//     var firstNumber = Number(inn[0])
//     if (inn.length === 14 && (firstNumber === 0 || firstNumber === 1 || firstNumber === 2)) {
//         console.log('inn is valid')
//     }else {
//         console.log('unknow')
//     }
//
// }
// validateINN('1081020758')

// function -expression

// var helle = function () {
//     console.log('hello')
// }
//
// function  printDel(){
//     console.log('-' .repeat(50))
// }
// printDel()

// arguments(es5), rest(es6+)
// function getMax2(numbers){
//     var maxNum = numbers[0]
//     for (var num of numbers){
//         maxNum = maxNum > num ? maxNum : num
//     }
//     return maxNum
// }

// console.log(getMax2([1,2,3,6]))

// arguments
// function  getAllSum() {
//     console.log(arguments)
//     var sum = 0
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[1]
// }
// var sum = Array.from(arguments).reduce((a, b) => a + b)
// console.log(sum)
// }
// getAllSum(2, 4, 4)
//
//rest
//     function getAllSum2(...args) {
//         console.log(args)
//         var sum = args.reduce((a, b) => a + b)
//         console.log(sum)
//     }
//
//     getAllSum2(2, 3, 4, 5)
//     printDel()
// //let, const
// var num
//     console.log(num)
// var  num = 5 ///hoisting -
let str = 'hello'
console.log(str)
const array = [1,2,3]
array.push(7)
console.log(array)

const  user = {
    name: 'Omar'
}
user.name = 0
user.name ='Omar'
console.log(user)

// области видомости - локалная ( блочный)
 function get(){
    let str = ''
 }
let a = 8
console.log(a)
{
    let a = 5
    console.log(a)
}
//2) arrow function - тртрелочный функция
//  function  getMax(n1, n2) {
//      console.log(n1 > n2 ? n1 : n2)
//  }
// getMax(1,2)

const getMax = (num1, num2) => console.log(num1 > num2 ? num1 : num2)
getMax(3,7)

//3) default params - пареметры по умолчанию
function pushJoin(array, separator = '.'){
    let result = ''
    for (let i =0; i < array.length; i++) {
        const elment = array[i]
        result += elment + (i === array.length - 1 ? '' : separator)
    }
    return result
}

console.log(pushJoin ([1, 2, 3, 4, 5]))

//4) template str - шаблонные строки
const name = 'Omar'
const surname = 'Mergeshev'
const lastname = ' Tilekov'
console.log(`${surname} ${name} ${lastname}`)

//5) rest and spreed operator
const num1=[1, 2, 3, 4, 4]
const num2=[6, 9, 7]
const num3=[...num1, ...num2]
console.log(Math.max(...num3))
console.log(num3)

//Анонимные функции
// Необязательно давать функциям определенное имя. Можно использовать анонимные функции:
function  sayHello() {
    console.log('hi')
}
const func = function (){
    console.log('hi user')
}

document.querySelector('.btn').addEventListener('click', function () {
    console.log('вы нажимали кнопку')
})



