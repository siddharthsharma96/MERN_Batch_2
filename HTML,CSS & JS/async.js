// What is Callbacks

// function preparePizza(callback) {
//   console.log("preapring pizza");
//   setTimeout(() => {
//     console.log("Pizza is ready");
//     callback();
//   }, 2000);
// }

// function eatPizza() {
//   console.log("Ready to eat");
// }

// preparePizza(eatPizza);

// What is Callback Hell

// function preparePizza(callback) {
//   setTimeout(() => {
//     console.log("Preparing Pizza");
//     callback();
//   }, 2000);
// }

// function buyDrinks(callback) {
//   setTimeout(() => {
//     console.log("Drinks are ready");
//     callback();
//   }, 2000);
// }

// function setTable(callback) {
//   setTimeout(() => {
//     console.log("table is ready");
//     callback();
//   }, 2000);
// }

// preparePizza(() => {
//   buyDrinks(() => {
//     setTable(() => {
//       console.log("food is ready for eat");
//     });
//   });
// });

// What is promise
// States of promises
// 1.Pending: which process is going on
// 2.Fulfilled
// 3. Reject

function preparePizza(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Preparing Pizza");
      resolve();
    }, 2000);
  });
}

function buyDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Drinks are ready");
      resolve();
    }, 2000);
  });
}

function setTable() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("table is ready");
      resolve();
    }, 2000);
  });
}

// preparePizza()
//   .then(() => buyDrinks())
//   .then(() => setTable())
//   .then(() => console.log("food is ready to eat"));

const a = new Promise((resolve, reject) => {
  let z = 1;
  if (z === 1) {
    resolve("Everything working fine");
  } else {
    reject("Error value is not same");
  }
});

// a.then((message) => console.log("run the ", message))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("run in every state");
//   });

// async and await

// const dinnerPreparation = async () => {
//   try{
//     await preparePizza();
//   await buyDrinks();
//   await setTable();
//   console.log("ready");
//   }catch(err){

//   }
// };

// dinnerPreparation();

const fetchingAnAPi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("error is ap[i");
    }
  } catch (err) {
    console.log(err);
  }
};

fetchingAnAPi();
