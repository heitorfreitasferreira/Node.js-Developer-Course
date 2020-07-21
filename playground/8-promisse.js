const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 5, 3])
    reject('Deu ruim')
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('sucess', result);
}).catch((err) => {
  console.log("err: " + err);
})