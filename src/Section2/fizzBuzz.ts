let displayStr: string = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        displayStr += "FizzBuzz ";
    } else if (i % 3 === 0) {
        displayStr += "Fizz ";
    } else if (i % 5 === 0) {
        displayStr += "Buzz ";
    } else {
        displayStr += `${i} `;
    }
}
console.log(displayStr.trimEnd());