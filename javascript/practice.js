// function sayHello() {

//     let num1 = 5;

//     if (true) {
//         // let num1 = 7
//         num1 = 7;
//         console.log(num1);
//     }

//     console.log(num1);
// }

// sayHello();


// function scope() {

//     if (true) {
//         // let num = 5;
//         // console.log(num);

//         // const num2 = 6
//         // console.log(num2);

//         var num3 = 10;
//         // console.log(num3);
//     }
//     // console.log(num);
//     // console.log(num2);
//     // console.log(num3);

// }

// console.log(num3);

// scope();

// SayHi();

// function SayHi() {
//     console.log('Hi');
// }

// SayHi();

// console.log(num);
// var num = 10;

// console.log(num);
// let num = 5;

// console.log(num);
// const num = 6;

// Closure

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();
// counter();
// counter();

//  -------------------------------------------------

// function createBankAccount(initialBalance) {
//     let balance = initialBalance;

//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log(`Deposited INR ${amount}`)
//         },
//         withdraw(amount) {
//             if (amount > balance) {
//                 console.log(`Insufficient funds`);
//                 return;
//             }
//             balance -= amount;
//             console.log(`INR ${amount} withdrawn`)
//         },
//         getBalance() {
//             return balance;
//         }
//     }
// }

// const account = createBankAccount(100);
// account.deposit(50);
// console.log(account.getBalance());
//  ------------------------------------


// console.log('start');


// setTimeout(() => {
//     console.log('Hello');
// }, 1000);

// console.log('end');

// setInterval(() => {
//     console.log('Hello')
// }, 1000);

// --------------------------------------------

console.log('1');

console.log('2');

setTimeout(() => console.log('3'), 3000);

setTimeout(() => console.log('4'), 1000);

Promise.resolve().then(() => console.log('8'))

console.log('5');

setTimeout(() => console.log('6'), 2000);

Promise.resolve().then(() => console.log('7'))

console.log('9');

// 