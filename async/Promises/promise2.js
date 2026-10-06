let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => reject('failed'), 1000);
});

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})