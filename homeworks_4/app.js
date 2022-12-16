const myArray = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'div','a','li', 'li', 'div']

const numsObj = {}
myArray.forEach(item => {
    if(!numsObj.hasOwnProperty(item)) {
       numsObj[item] = 0
    }
})

myArray.forEach(el => {
    for (const name of Object.keys(numsObj)) {
        if(name === el) {
            numsObj[name] += 1
        }
    }
})

console.log(numsObj)

const sortedObj = Object.entries(numsObj)
    .sort(([,a],[,b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sortedObj);




