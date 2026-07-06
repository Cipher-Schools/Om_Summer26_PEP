
// function hello() {

//     return Promise.resolve('Hello World');
// }

// hello()
// .then(data => console.log(data));


// async function hello () {
//     return 'hello';
// }

// hello()
// .then(data => console.log(data));


function login() {
    console.log("1.Logging in....");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2.Login successful");
            resolve();
        }, 5000)
    })
}

function getUser() {
    console.log('3.Getting user...');

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4.User is loaded');
            resolve();
        }, 2000)
    })
}

function getOrders() {
    console.log('5.Getting orders..')

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('6.Orders data is loaded');
            resolve();
        }, 1000)
    })
}

function getOrderDetail() {
    console.log('7.Getting order details');

    setTimeout(() => {
        console.log('8.Order details are loaded')
    }, 3000)
}


async function loadData() {
    await login();
    await getUser();
    await getOrders();
    await getOrderDetail();

}

loadData();