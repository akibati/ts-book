// const greeting = "Hello, ";
// const target = "world!";
// console.log(greeting + target);

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('文字列を入力してください:', (line) => {
//     console.log(`${line}が入力されました`);
//     rl.close();
// });

// rl.question('数値を入力してください:', (line) => {
//     const num = Number(line);
//     console.log(num + 1000);
//     rl.close();
// });

// const bigint = BigInt("foooooo");
// console.log(bigint);

// rl.question('パスワードを入力してください:', (password) => {
//     if (password === 'hogehoge') {
//         console.log('ようこそ');
//     } else {
//         console.log('誰？');
//     }
//     rl.close();
// })

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    const message = 0 <= num && num < 100
        ? `${num}は0以上100未満です`
        : `${num}は0以上100未満ではありません`;
    console.log(message);

    rl.close();
})

// rl.question("名前を入力してください:", (name) => {
//     const displayName = name || getDefaultName();
//     console.log(`こんにちは、${displayName}さん`);
//     rl.close();
// });

// function getDefaultName() {
//     return "名無し";
// }

// const secret = process.env.SECRET ?? "default";
// console.log(`secretは${secret}です`);