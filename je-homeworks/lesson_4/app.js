// const obj =  {
//     name: 'Omar',
//     age: 28
// }
// console.log(obj)

// const data = JSON.stringify(obj)
// // console.log(data)
// const obj1 = JSON.parse(data)
// console.log(obj.name)

// const btn = document.querySelector('button')
//
// btn.addEventListener('click', () => {
//     const request = new XMLHttpRequest()  /// создания запроса
//     request.open("GET", "data.json") // объявление метода запроса и указание пути
//     request.setRequestHeader("Content-type","application/json")  // указывание заголовка
//     request.send() // отправка запроса
//     request.addEventListener('load',() => {
//         // console.log(request.response)
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//     })
// })


// btn.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "peoples.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         data.forEach(people => {
//             const div = document.createElement('div')
//             div.innerHTML = people.name
//             document.body.append(div)
//         })
//     }
// }


// str num bool undefined null NaN - primitive
// obj arr - obj [сылочный]

