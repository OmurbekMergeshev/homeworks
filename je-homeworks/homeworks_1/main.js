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
let block = document.querySelector("#box");
let position = 0;

function animate(){
    block.style.left = position + 'px';
    position += 1;
    if(position > 450) return;
    return setTimeout(animate);
}

animate();



