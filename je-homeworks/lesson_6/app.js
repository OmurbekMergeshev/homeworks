// setTimeout(() => {
//     console.log('hello')
//     setTimeout(() => {
//         console.log('OK')
//     },1000)
// },1000)

// console.log('Loading...')
//
// setTimeout(() => {
//     const  product = {
//         name: 'Product name',
//         price: '$685'
//     }
//     console.log(product, '1')
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2')
//     },1000)
//
// },1000)

// const request = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Product name',
//             price: '$685'
//         }
//         console.log(product, '1')
//         resolve(product)
//         reject()
//     }, 2000)
// })
//
//
// const resoleData = (product) => {
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2')
//     },1000)
// }
//
// const rejectData = () => {
//     console.log('ERROR')
// }
// request.then(resoleData, rejectData)


// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        const  product = {
//            name: 'Iphone XI',
//            price: '658'
//        }
//         console.log(product, '1 step')
//         resolve(product)
//     },2000)
// })
//
// request.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2 step')
//             resolve(product)
//     },1000)
//     })
// }).then((product) => {
//     product.isModified = false
//     product.soldOut = false
//     console.log(product, '3 step')
// }).catch(() => {
//     console.log('ERROR')
// }).finally(() => {
//     console.log('FINALLY!')
// })
// fetch('https://jsonplaceholder.typicode.com/todos/50')
//     .then((response) => response.json())
//     .then(json => console.log(json))


const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const prevButton = document.querySelector('.btn-prev')

let num = 1

btn.onclick = () => {
    num++

    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
}

