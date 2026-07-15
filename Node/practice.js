const fs = require('fs');

console.log('Start');

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('Error while reading file');
        console.log('Err: ',err)
        return;
    }
    console.log(data);
})

// fs.writeFile('hello1.txt', 'Goodmorning', (err) => {
//     if (err) {
//         console.log('Error: ', err);
//         return;
//     }
//     console.log('Written');
// } )

// fs.appendFile('hello.txt', '\nThis is node class', (err) => {
//     if (err) {
//         console.log('Error');
//         return;
//     }
//     console.log('Appended');
// })

// fs.unlink('hello1.txt', (err) => {
//     if (err) {
//         console.log('Error');
//         return;
//     }
//     console.log('Deleted');
// })

console.log('End');