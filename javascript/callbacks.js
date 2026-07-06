

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

// function login(callback) {
//     console.log("1.Logging in....");

//     setTimeout(() => {
//         console.log("2.Login successful");

//         callback();

//     }, 5000)
// }

// function getUser(callback) {
//     console.log('3.Getting user...');

//     setTimeout(() => {
//         console.log('4.User is loaded');
//         callback();
//     }, 2000)
// }

// function getOrders(callback) {
//     console.log('5.Getting orders..')

//     setTimeout(() => {
//         console.log('6.Orders data is loaded');

//         callback();
//     }, 1000)
// }

// function getOrderDetail() {
//     console.log('7.Getting order details');

//     setTimeout(() => {
//         console.log('8.Order details are loaded')
//     }, 3000)
// }


// login(() => {
//     getUser(() => {
//         getOrders(() => {
//             getOrderDetail()
//         })
//     })
// })

function one(callback) {
    setTimeout(() => {
        console.log('1');
        callback();
    }, 4000)
}

function two(callback) {
    setTimeout(() => {
        console.log('2');
        callback();
    }, 1000)
}

function three(callback) {
    setTimeout(() => {
        console.log('3');
        callback();
    }, 2000)
}

function four(callback) {
    setTimeout(() => {
        console.log('4');
        callback();
    }, 1000)
}

function five(callback) {
    setTimeout(() => {
        console.log('5');
        callback();
    }, 1000)
}

function six(callback) {
    setTimeout(() => {
        console.log('6');
        callback();
    }, 1000)
}

function seven(callback) {
    setTimeout(() => {
        console.log('7');
        callback();
    }, 3000)
}

function eight(callback) {
    setTimeout(() => {
        console.log('8');
        callback();
    }, 1000)
}

function nine(callback) {
    setTimeout(() => {
        console.log('9');
        callback();
    }, 2000)
}

function ten() {
    setTimeout(() => {
        console.log('10');
    }, 1000)
}

// one();
// two();
// three();
// four();
// five();
// six();
// seven();
// eight();
// nine();
// ten();

one(() => {
    two(() => {
        three(() => {
            four(() => {
                five(() => {
                    six(() => {
                        seven(() => {
                            eight(() => {
                                nine(() => {
                                    ten()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})