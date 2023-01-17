
// setTimeout( () => {
//     console.log('1')
// },1000)
//
// setTimeout( () => {
//     console.log('2')
// },0)


// const interval = setInterval( () => {
//     console.log('hi')
// },1000)
// // console.log(interval)


// setTimeout( () => {
//     clearInterval(interval)
// },500)
// clearInterval(interval)


// function go() {
//     console.log('GO')
// }
//
// function calc(num, func) {
//     console.log(num)
//     func()
// }
// calc(12,go)

const box = document.querySelector('.box')

let leftPosition = 0
let topPosition = 0

const move = ()  => {
    if (leftPosition <= 450 && topPosition == 0) {
        leftPosition++
        box.style.left = `${leftPosition}px`
        setTimeout(move,1)
    }else if (leftPosition >= 450 && topPosition <= 450) {
        topPosition++
        box.style.top = `${topPosition}px`
        setTimeout(move,1)
    }else if (leftPosition > 0 && topPosition >= 450) {
        leftPosition--
        box.style.left = `${leftPosition}px`
        setTimeout(move,1)
    }else if (leftPosition == 0 && topPosition >= 0) {
        topPosition--
        box.style.top = `${topPosition}px`
        setTimeout(move, 1);
    }
}
move()


// const doHomeWork = (finish, subject = prompt('Subject')) =>{
//     alert(`starting my ${subject} homework`)
//     finish()
// }
//
//
// const alertFinished = () => {
//     alert('DONE')
// }
// doHomeWork(alertFinished)


// const arr = [1,2,3,4,5, 'Omar', 'hello', 'Fruit', 'hi', '11']
//
// arr.forEach(item => {
//     const block = document.createElement('div')
//     block.setAttribute('class','block_a')
//     block.innerHTML = item
//     const wrapper = document.querySelector('.wrapper')
//     wrapper.append(block)
// })

// arr.map ( item => console.log(item + 10))

// const  num = (a,b) =>console.log(a + b)
//
// num(12,12)
//
