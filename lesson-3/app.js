//1)
for(let i = 0; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

//2)
let sum = 0
let number = 0
do {
    sum += number
    number = parseInt(prompt('Введите номер: '))
} while(number >= 0)

console.log(`сумма чисел - ${sum}.`)