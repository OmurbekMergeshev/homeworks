//1)
const box = document.querySelector('.box')

let PositionX = 0
let PositionY = 0

const move = ()  => {
    if (PositionX <= 450 && PositionY === 0) {
        PositionX++
        box.style.left = `${PositionX}px`
        setTimeout(move,1)
    }else if (PositionX >= 450 && PositionY <= 450) {
        PositionY++
        box.style.top = `${PositionY}px`
        setTimeout(move,1)
    }else if (PositionX > 0 && PositionY >= 450) {
        PositionX--
        box.style.left = `${PositionX}px`
        setTimeout(move,1)
    }else if (PositionX === 0 && PositionY >= 0) {
        PositionY--
        box.style.top = `${PositionY}px`
        setTimeout(move, 1);
    }
}
move()

///2)
let number = 0;
let intervalId = 0;
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const numberElement = document.querySelector("#number");

startButton.addEventListener("click", () => {
    intervalId = setInterval(() => {
        number += 1;
        numberElement.innerHTML = number;
    }, 1000);
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
});
