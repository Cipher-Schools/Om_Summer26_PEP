
// const promise = new Promise((resolve, reject) => {
    
//     // const success = true;
//     const success = false;

//     if (success) {
//         resolve('Promise resolved');
//     } else {
//         reject('Promise is rejected');
//     }
// })

// promise
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('Finished!');
// })


// function orderFood(isRestaurantOpen) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if(isRestaurantOpen) {
//                 resolve('Food delivered');
//             } else {
//                 reject('Restaurant is closed');
//             }
//         }, 2000)
//     })
// }

// orderFood(false)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// function login() {
//     console.log("1.Logging in....");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2.Login successful");
//             resolve();
//         }, 5000)
//     })
// }

// function getUser() {
//     console.log('3.Getting user...');

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('4.User is loaded');
//             resolve();
//         }, 2000)
//     })
// }

// function getOrders() {
//     console.log('5.Getting orders..')

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('6.Orders data is loaded');
//             resolve();
//         }, 1000)
//     })
// }

// function getOrderDetail() {
//     console.log('7.Getting order details');

//     setTimeout(() => {
//         console.log('8.Order details are loaded')
//     }, 3000)
// }

// login()
// .then(getUser)
// .then(getOrders)
// .then(getOrderDetail);




function getProducts() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let success = true;
            let success = false;

            if (success) {
                resolve('Product loaded');
            } else {
                reject('Product failed');
            }

        }, 3000)
    })
}

function getOffers() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let success = true;
            let success = false;
            if (success) {
                resolve('Offers loaded')
            } else {
                reject('offer request failed');
            }
            }, 2000)
    })
}


function getCategories() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let success = true;
            let success = false;
            if (success) {
                resolve('Categories loaded')
            } else {
                reject('Categories request failed');
            }
        }, 1000)
    })
}

// Promise.all([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then((data) => {
//     console.log('Resolved: ', data);
// })
// .catch((err) => {
//     console.log('Error: ', err);
// })

// Promise.allSettled([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then((data) => {
//     console.log('Resolved: ', data);
// })
// .catch((err) => {
//     console.log('Error: ', err);
// })

// Promise.race([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then((data) => {
//     console.log('Resolved: ', data);
// })
// .catch((err) => {
//     console.log('Error: ', err);
// })

// Promise.any([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then((data) => {
//     console.log('Resolved: ', data);
// })
// .catch((err) => {
//     console.log('Error: ', err);
// })