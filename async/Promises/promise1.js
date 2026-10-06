let p = new Promise((resolve, reject) => {
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