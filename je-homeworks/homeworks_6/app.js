const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const prevButton = document.querySelector('.btn-prev')
let num = 1

btn.onclick = () => {
    num++
    fetchTodo(num);
}

prevButton.onclick = () => {
    if (num > 1) {
        num--;
        fetchTodo(num);
    }
}


function fetchTodo(num) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => response.json())
        .then(todoItem => {
            block.innerHTML = `
                 <div class="card">
                 <h3>${todoItem.title}</h3>
                 <h3>${todoItem.completed}</h3>
                 <h3>${todoItem.id}</h3>
                 </div>
             `
        })
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

