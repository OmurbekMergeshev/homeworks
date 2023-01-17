//1)
const phoneInput = document.querySelector('#phoneInput');
const phoneCheck = document.querySelector('#phoneCheck');
const phoneResult = document.querySelector('.phoneResult');

const phoneRegExp = /^\+7\(?(\d{3})\)-?[-. ]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{2})$/;

phoneCheck.addEventListener('click', () => {
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK';
        phoneResult.style.color = 'green';
    }else {
        phoneResult.innerText = 'NOT OK';
        phoneResult.style.color = 'red';
    }
});



//2)
const block = document.querySelector("#box");

let leftPosition = 0;
let topPosition = 0;

const move = () => {
    if (leftPosition <= 460 && topPosition == 0) {
        leftPosition += 16;
        block.style.left = `${leftPosition}px`;
        setTimeout(move, 100);
    } else if (leftPosition >= 460 && topPosition <= 460) {
        topPosition += 16;
        block.style.top = `${topPosition}px`;
        setTimeout(move, 100);
    } else if (leftPosition > 0 && topPosition >= 460) {
        leftPosition -= 16;
        block.style.left = `${leftPosition}px`;
        setTimeout(move, 100);
    } else if (leftPosition == 0 && topPosition >= 0) {
        topPosition -= 16;
        block.style.top = `${topPosition}px`;
        setTimeout(move, 100);
    }
};
move();
