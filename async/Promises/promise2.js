let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => reject(new Error('This is an error object')), 1000);
});
// ^^ The executor should only call 1 resolve or 1 reject. Further uses will be ignored (in the same body).

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})