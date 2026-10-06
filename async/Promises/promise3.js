new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 2000);
})
.finally(() => console.log('Promise fullfilled'))
.then(message => console.log(message));