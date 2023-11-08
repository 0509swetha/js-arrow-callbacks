async function getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user;
  }
  
  getUser(1)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(`Error occurred: ${error}`);
    }















    function doSomethingAsync(callback) {
        // do some asynchronous operation
        setTimeout(function() {
          callback("done");
        }, 1000);
      }
      
      function callbackFunction(status) {
        console.log(status);
      }
      
      doSomethingAsync(callbackFunction);







      const promise = new Promise((resolve, reject) => {
        // Do some asynchronous operation
        setTimeout(() => {
          const value = 42;
          if (value) {
            resolve(value);
          } else {
            reject("Error: Value not found");
          }
        }, 1000);
      });
      
      promise
        .then((result) => {
          console.log(`The result is: ${result}`);
        })
        .catch((error) => {
          console.error(`Error occurred: ${error}`);
        });