new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error returned')), 2000);
})
.finally(() => console.log('Promise settled'))
.then(message => console.log(message))
.catch(error => console.error(error));