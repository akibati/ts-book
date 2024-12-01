import { on } from "events";
import { createInterface } from "readline";

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const messages = {
//     good: "0以上の数値が入力されました!",
//     bad: "負の数値を入力しないで下さい!"
// }

// rl.question('数値を入力してください:', (line) => {
//     const num = Number(line);
//     console.log(messages[num > 0 ? "good" : "bad"]);
//     rl.close();
// });

// const obj1 = {
//     foo: 123,
//     bar: 456,
// };

// const obj2 = {
//     bar: -999,
//     baz: -9999,
// }

// const obj3 = {
//     ...obj1,
//     ...obj2,
// }

// console.log(obj3);

// const foo = {
//     num: 123,
// }
// const bar = foo;
// console.log(bar.num);
// bar.num = 0;
// console.log(foo.num);

// const foo = {
//     num: 1234,
// };
// const bar = {
//     ...foo,     // fooのコピーでオブジェクトは別になる
// };
// console.log(bar.num);
// bar.num = 0;
// console.log(foo.num);

// const foo = {
//     obj: {
//         num: 1234,
//     }
// };
// const bar = {
//     ...foo,
// }
// bar.obj.num = 0;
// console.log(foo);

// const obj = {
//     foo: 123,
//     bar: "hello, world"
// };
// console.log(obj.baz);

// type FooBarObj = {
//     foo: number,
//     bar: string,
// }

// const obj: FooBarObj = {
//     foo: 123,
//     bar: "hello"
// }

interface FooBarObj {
  foo: number,
  bar: string,
};

const obj: FooBarObj = {
  foo: 123,
  bar: "hello"
}
