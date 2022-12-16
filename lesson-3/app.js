// var user = {}  //
 //3 вида (класса) операторов
// унарыные операторы
//3 тернарыные операторы

//true-white, false-block
// var playerColor = true
// if (playerColor) {
//     // console.log('You start...')
// }else {
//     // console.log('wait your enemy..')
// }
//
// var playerColor = true
// console.log(playerColor ? 'You start...' : 'wait your enemy..')

//7) symbol 8)bigint
//falsy -выражение- false, 0, "", '',undef,null, NAN, -0, 0n
// var isReady = 890 //true
// console.log(isReady ? 'True' : 'False')

///Array -массив, список
// var numbers = [1,2,3,4,5,6,7,8,9,0,12,34]
// console.log(typeof numbers)
//
// var others = [
//     true,
//     {},
//     null,
//     undefined,
//     'js',
//     48,
//     {login: 'Omar'}
// ]
//
// var fruits = ['banana', 'orange', 'pineapple', 'raspberry']
// console.log(fruits[1][3])
// console.log(fruits.length - 1)
// console.log(fruits.length)

//методы массива
// fruits.push('apple', 'cherry')

// fruits.unshift('apple', 'cherry')
// var firstFruit = fruits.shift()
// fruits.splice(3)
// var lastFruit = fruits.pop()
// console.log(lastFruit)
// var strArr = fruits.join('-') //type string
// console.log( typeof strArr)
// console.log( typeof fruits)
//
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix [2] [1])
// var users = [
//     {
//         userName: 'Jack',
//         salary: 1500
//     },
//     {
//         userName: 'John',
//         salary: 500
//     },
//     {
//         userName: 'Stef',
//         salary: 2500
//     },
//     {
//         userName: 'Zack',
//         salary: 350
//     }
// ]
// var filteredUser = users.filter(user => user.salary > 500)
// var filtered2User = users.filter(user => user.salary < 500)
// console.log(filteredUser)
// console.log(filtered2User)

// циклы
//1) while - цикл с предусловием
// var fruits = ['banana', 'orange', 'pineapple', 'raspberry']
// var fruitForFound = 'raspberry'
// var i = 0
// while (i < 5) {
//     if (fruits[i] === fruitForFound) console.log('fruit found on index', i)
//     i++
// }
//
// //2) do..while - цикл с постумловием
// var  num = 0
// do{
//     num++
//     console.log(num)
//     // num++
// }while (num <7)
// //i = 0
// // i = i + 1
// // i++
//
// ///безконечные циклы - while(true){}, for(;;) ///
//
//
// var blackList = ['ayana', 'maria', 'aibek', 'mark', 'aidana']
// do{
//    name = prompt('enter your name%')
// }while (name === '' || blackList.includes(name.toLowerCase()))
// console.log('your name is', name)
//
// //break, continue
// var names = ['adar','anna','maria','aidana']
// for (var i = 0; i < names.length; i++) {
//     if (blackList.includes(names[i].toLowerCase())) {
//         console.warn('имя',name[i] + 'есть ы черном списке')
//         continue
//     }
//     console.log('привет', names[i])
// }

for(let i = 0; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

let sum = 0
let number = 0
do {
    sum += number
    number = parseInt(prompt('Введите номер: '));
} while(number >= 0)

console.log(`сумма чисел - ${sum}.`);