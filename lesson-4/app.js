var users = [
    {id:1, name: 'Adam' , age:32},
    {id:2, name: 'John' , age:54},
    {id:3, name: 'William' , age:12},
    {id:4, name: 'Oliver' , age:21},
    {id:5, name: 'Olivia' , age:40},
]
var result = users.filter(user => user.name.includes('li'))
console.log(result)

//map
var soms = [200, 30, 45, 10, 100, 22345]
var  dollars = soms.map(som => som/58)
var fixDollars =dollars.map(dollar => dollar.toFixed(2))
console.log(soms)
console.log(fixDollars)

//forEach
var numbers = [1,4,6,7,8,9,2]
numbers.forEach(function (num){
  var result = num * num
    console.log(`Квадрат чилса ${num} - ${result}`)
})

//some - every
var nums = [3,5,7,9,11]
var evenNum = nums.every(num => {
    return num % 2 !== 0
})
console.log(evenNum)

printDelimiter()
//for c cчетчиком
for (var i =0; i <= 12; i++) {
    var month
    var currentMonth = new Date().getMonth() + 1
    if (currentMonth === i) continue

    switch (i) {
        case 1:
            month = 'January';
            break
        case 2:
            month = 'February';
            break
        case 3:
            month = 'March';
            break
        case 4:
            month = 'April';
            break
        case 5:
            month = 'May';
            break
        case 6:
            month = 'June';
            break
        case 7:
            month = 'July';
            break
        case 8
        :
            month = 'August';
            break
        case 9:
            month = 'September';
            break
        case 10:
            month = 'October';
            break
        case 11:
            month = 'November';
            break
        case 12:
            month = 'December';
            break
    }
    console.log((i === 1 ? 'Year starts with ' : 'Then ') + month)
}
printDelimiter()
//for..of
var newWord = ''
for (var letter of 'Frontend') {
    newWord += letter + '_'
}
console.log(newWord)

var fruits = ['apple', 'melon', 'pineapple', 'lemon']
for (var fruit of fruits) {
    console.log(fruit.toUpperCase())
}
printDelimiter()
//for...of c obektami
var auto = {
    name: 'kia k5',
    year: 2022,
    color: 'red'
}
// for (var car of Object.values(auto)) {
//     console.log(car)
// }
printDelimiter()
//for...in
for (var car in auto) {
    console.log(car)
}
printDelimiter()
//
var array = [1, 2, 2, 3, 4, 5, 5, 4, 3, 6, 7, 8, 8,9,0]
var arr =[]
for (var i of array){
    if (arr.includes(i))continue
    arr.push(i)
}
console.log(arr)
console.log(array)

//
printDelimiter()
var arr2 = Array.from(new Set(array))
console.log(arr2)
printDelimiter()
//функции
function sayHello(){
    console.log('Hello World')
}
sayHello()

function printDelimiter(){
    console.log('-'.repeat(20))
}
printDelimiter()

function getMax(num1, num2){
    console.log(num1 > num2 ? num1 : num2)
}
getMax(5,3)
printDelimiter()

function  getMax2(numbers){
    var maxNum = numbers[0]
    for (var num of numbers){
        maxNum =maxNum> num ? maxNum :num
    }
    return maxNum
}

console.log(getMax2([1, 7,4,8,9]))
