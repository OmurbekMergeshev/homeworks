const  som  = document.querySelector('#som')
const  usd  = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target,target2) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET','data.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (elem.id === 'som') {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.eur).toFixed(2)
            }else if(elem.id === 'usd') {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (target.value / response.eur).toFixed(2)
            } else {
                target.value = (elem.value * response.eur).toFixed(2)
                target2.value = (target.value / response.usd).toFixed(2)
            }
            elem.value === ''
                ? (target.value = '') || (target2.value = '')
                : null
        }
    })
}

convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)
