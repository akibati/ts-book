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

// rl.question('数値を入力してください:', (line) => {
//     const num = Number(line);
//     if (0 <= num && num < 100) {
//         console.log(`${num}は0以上100未満です`);
//     } else {
//         console.log(`${num}は0以上100未満ではありません`);
//     }
//     rl.close();
// })

rl.question("名前を入力してください:", (name) => {
    const displayName = name || "名無し";
    console.log(`こんにちは、${displayName}さん`);
    rl.close();
});