// callback - фуннции
// const  first =()=>{
//     console.log(1)
// }
// const second =()=>{
//     console.log(2)
// }
// first()
// second()

//2 bari
// const first = ()=>{
//     setTimeout(()=>{
//         console.log(1)
//     },500)
// }
// const second = ()=>{
//         console.log(2)
// }
// first()
// second()
//

function getSquareNums(arr) {
    const newArr = []
    for (let  i=0; i<arr.length; i++) {
        newArr.push(arr[i] ** 2)
    }
    return newArr
}
const nums = [1, 2, 3, 4]
console.log(nums)
const res = getSquareNums(nums)
console.log(res)

function getDivideNums(arr) {
    const newArr = []
    for (let  i=0; i<arr.length; i++) {
        newArr.push(arr[i] / 2)
    }
    return newArr
}
const nums2 = [1, 2, 3, 4]
console.log(nums2)
const res2 = getDivideNums(nums2)
console.log(res)

// эти же фун
function doSome(arr, instruction) {
    const newArray = []
    for (let i =0; i < arr.length; i++){
        newArray.push(instruction(arr[i]))
    }
    return newArray
}

function getSquared(num){
    return num ** 2
}
function getDivide(n) {
    return n / 2
}

console.log(doSome([4, 7, 3, 9, 8, 0], getSquared))

console.log(doSome([4, 7, 3, 9, 8, 0], getDivide))

// финиция которая возвращает фунция как результат

function getFullName(firstName) {
    return function (lastName) {
        return`Hello ${firstName} ${lastName}`
    }
}
const  fullname =getFullName('Omar')
console.log(fullname)
console.log(fullname('Mergeshev'))

//Замыкания
function getUserProfessional(prof) {
    const profession = prof.toUpperCase()
    return function (name){
        return`${profession} ${name}`
    }
}
const profMale = getUserProfessional('front')
const profFemale = getUserProfessional('front')
console.log(profMale)
console.log(profMale(' Dastan'))
console.log(profFemale(' Alina'))

// рабoта с DOM - eлементами
// создать div
const div = document.createElement('div')
// добавит к нему клласс wrapper
div.classList.add('wrapper')
//помистит его внутри тега body
const body = document.body
body.appendChild(div)
// создать заголовок h1 'DOM-elements'
const header = document.createElement('h1')
header.textContent = 'DOM-elements'
//обавить h1 еред div  классом rapper
div.insertAdjacentElement('beforebegin', header)
 // оздать список ul
//добавит в неге 3 элемент с ткстом 'один' 2 3
const ul =`
     <ul> 
         <li>one</li>
         <li>two</li>
         <li>three</li>
     </ul>
`
//поместить список внутри элемента с классном wrapper
div.innerHTML = ul

const counter = document.querySelector('.counter')
const incBtn = document.querySelector('.increment')
const decBtn = document.querySelector('.decrement')
const input = document.querySelector('.input')




