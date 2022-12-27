///////add task///////
document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === '') {
        alert('Please enter a task')
    }else {
        (document.querySelector('.tasks').innerHTML
        += `<div class="task"> 
                <span class="taskName">${document.querySelector('input').value}</span>
                <button class="delete">x</button>
            </div>`)

        document.querySelector('input').value = ''

        //////////delete task/////
        let current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++ ) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        /////done task///////
        let doneTask = document.querySelectorAll('.taskName');
        for (let i = 0; i < doneTask.length; i++){
            doneTask[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
    }
}



////клвссы
class animal {
    constructor(name, color, height, size, male) {
        this.name = name
        this.color = color
        this. height = height
        this.size = size
        this.male = male
    }
}

console.log(animal)