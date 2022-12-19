function reverseString(str){
    let stringRev = '';
    for (let i= 0; i < str.length; i++){
        stringRev = str[i]+stringRev;
    }
    return stringRev
}
alert(reverseString('homework number-5'))



const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};
const numbers = [1, 3, 5, 7, 9, 11];
console.log(getAverage(numbers));

