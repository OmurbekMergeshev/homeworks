const url = 'https://jsonplaceholder.typicode.com/posts'

const main = document.querySelector('.news-cards')

  const getData = async () => {
    const response = await fetch(url)
     const data = await response.json()
      console.log(data)
     data.forEach((post) => {
         main.innerHTML += `
                 <div class="card">
                 <img src="images/Image_4.png"/>
                 <h2>${post.title}</h2>
                 <p>${post.body}</p>
                </div>
                        `
     })

 }
 getData()
