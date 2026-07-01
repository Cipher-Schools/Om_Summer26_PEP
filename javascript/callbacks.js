

// function one() {
//     console.log('One');
// }

// function two(fn) {
//     console.log('two')
//     fn();
//     console.log('after callback');
// }

// // one();
// two(one);


// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function callGreet(callback) {
//     // callback('Tom');
//     callback()
// }


// greet('Jerry');
// greet('John');
// callGreet(() => {
//     greet('Harry');
// })

// callGreet(greet);

// setTimeout(() => {
//     console.log('Hello World!')
// }, 1000);


// function login() {
//     console.log("1.Logging in....");

//     setTimeout(() => {
//         console.log("2.Login successful");
//     }, 5000)
// }

// function getUser() {
//     console.log('3.Getting user...');

//     setTimeout(() => {
//         console.log('4.User is loaded');
//     }, 2000)
// }

// function getOrders() {
//     console.log('5.Getting orders..')

//     setTimeout(() => {
//         console.log('6.Orders data is loaded');
//     }, 1000)
// }

// function getOrderDetail() {
//     console.log('7.Getting order details');

//     setTimeout(() => {
//         console.log('8.Order details are loaded')
//     }, 3000)
// }

// login();
// getUser();
// getOrders();
// getOrderDetail();

function login(callback) {
    console.log("1.Logging in....");

    setTimeout(() => {
        console.log("2.Login successful");

        callback();

    }, 5000)
}

function getUser(callback) {
    console.log('3.Getting user...');

    setTimeout(() => {
        console.log('4.User is loaded');
        callback();
    }, 2000)
}

function getOrders(callback) {
    console.log('5.Getting orders..')

    setTimeout(() => {
        console.log('6.Orders data is loaded');

        callback();
    }, 1000)
}

function getOrderDetail() {
    console.log('7.Getting order details');

    setTimeout(() => {
        console.log('8.Order details are loaded')
    }, 3000)
}


login(() => {
    getUser(() => {
        getOrders(() => {
            getOrderDetail()
        })
    })
})