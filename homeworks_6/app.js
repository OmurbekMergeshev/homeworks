// const counters = document.querySelector('.counter')
// const incBtn = document.querySelector('.increment')
// const decBtn = document.querySelector('.decrement')
// const input = document.querySelector('.input')
const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;

            if (direction === 'increment') {
                newValue = currentValue + 1;
            } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }

            inp.value = newValue;
        })
    })

}

counter();
