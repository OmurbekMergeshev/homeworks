// const cityName = document.querySelector('.cityName')

// const apiKey = 'e417df62e04d3b1b111abeab19cea714'
// const cityName = document.querySelector('.city')
// const temp = document.querySelector('.temp')
//
// const  citySearch = () => {
//     const cityNameValue = document.querySelector('.cityName')
//
//     cityNameValue.addEventListener('input', (e) => {
//
//         const cityNameValueTarget = e.target.value
//
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValueTarget}&appid=${apiKey}`)
//             .then(resp => resp.json())
//             .then(date => {
//                 cityName.innerHTML = date.name ? date.name : 'Город не найлеи...'
//                 temp.innerHTML = date?.name?.temp ? Math.round(date?.main?.temp - 273) + '&deg' + 'C' : ''
//             })
//     })
//
// }


// const delay = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
//
//
// const  url =  'https://jsonplaceholder.typicode.com/todos/1'
//
// const  fetchData = () => {
//     console.log('start')
//     return delay(200)
//         .then(() => fetch(url))
//         .then((resp) => resp.json())
// }
//
// fetchData()
//     .then(data => console.log(data))
//     .catch( () => console.error('ERROR'))
//     .finally(() => console.warn('DONE'))

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}


const  url =  'https://jsonplaceholder.typicode.com/todos/1'

const fetchData = async () => {
    try {
        console.log('Start....')
        await delay(2000)
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)
    } catch {
        console.log('ERROR')
    } finally {
        console.log('DONE!')
    }
}
fetchData()
