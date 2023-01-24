const wrapper = document.querySelector('.btn-block')
const bnts = document.querySelector('button')

// console.log(bnts([0])

// bnts[0].classList.add('red')

// bnts.forEach( item => {
//     // console.log(item)
//     item.addEventListener('click', (event) => {
//         // console.log(event.target)
//         if (event.target.classList.contains('red')){
//             event.target.classList.remove('red')
//         }else {
//             event.target.classList.add('red')
//         }
//     })
// })

// wrapper.onclick = (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         event.target.onclick = (event) => {
//             if (event.target.classList.contains('red')){
//                 event.target.classList.remove('red')
//             }else {
//                 event.target.classList.add('red')
//             }
//         }
//     }
// }

const newbtn = document.createElement('button')
wrapper.append(newbtn)
// wrapper.prepend(newbtn)



