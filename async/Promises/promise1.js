let p = new Promise((resolve, reject) => { // The function passed in inside the Promise constructor is called the executor
    let a = 3;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('Failure');
    }
});

// p.then((successMessage) => {
//     console.log(successMessage);
// }, (failedMessage) => {
//     console.log(failedMessage);
// });

p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})