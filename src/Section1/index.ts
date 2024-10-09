// イントロダクション

// const str: string = "foobar";

function repeatHello(count: number): string {
    return "hello".repeat(count);
}

console.log(repeatHello(10));

// ダメな例
// function double(value: number) {
//     console.log(value * 2);
// }
// function double(value: string) {
//     console.log(value.repeat(2));
// }

function double(value: string | number) {
    if (typeof value === "number") {
        console.log(value * 2);
    } else {
        console.log(repeatHello(2));
    }
}

double(223);
double("hello");
