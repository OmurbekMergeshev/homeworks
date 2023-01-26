const btn = document.querySelector('button')

btn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','http://localhost:63342/je-homeworks/homeworks_4/peoples.json')
    request.setRequestHeader('Content-type','application/json')
    request.send()
    request.onload = () => {
      const data = JSON.parse(request.response)
        data.forEach(person => {
            const name = person.name
            const age = person.age
            const list = document.createElement('p')
            list.innerHTML = `${name}, ${age}`
            document.body.appendChild(list)
            console.log(`Name: ${name}, Age: ${age}`)
        })
    }
}



