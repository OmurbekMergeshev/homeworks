const url = 'https://jsonplaceholder.typicode.com/photos'

const main = document.querySelector('.img')

  const getData = async () => {
    const response = await fetch(url)
     const data = await response.json()
      console.log(data)
     data.slice(0, 50).forEach((post) => {

         main.innerHTML += `
                 <div class="card">
                 <img src=${post.url}/>
                 <h2>${post.title}</h2>
                </div>
                        `
     })
 }
 getData()

