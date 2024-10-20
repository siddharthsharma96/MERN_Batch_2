// console.log(fullName);
// var fullName = "Siddharth SHarma";
// console.log(fullName);
// let a = 10;
// a = 30;
// console.log(a);

// // console.log(b);

// const b = 20;
// b = 10;
// console.log(b);
// printName();
// console.log(printName);

// // function declaration
// function printName() {
//   console.log("chn", a);

//   var a = 10;
//   console.log("chn", a);
// }

// // function invocation
// printName();

// // function Expression
// b();
// let b = function () {
//   console.log("hello from function expression");
// };
// b();
// var aa = 20;
// // Arrow function
// var a = () => {
//   let aa = 10;
//   console.log("heelo from arrow function", this.aa);
// };

// a();

// console.log(aa);

let a = [1, 2, 3, 4, 4, 5, 6, 6, 6, 8, "red"];
console.log(a);
a.push(209);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift(30);
console.log(a);
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
//   if (a[i] === 4) {
//     break;
//   } else if (a[i] === 2) {
//     console.log("we got 2");
//   } else {
//     console.log("Values are coming");
//   }
// }

var r = a.map((el, i) => el * i);
console.log(r);
console.log(a);

const obj = {
  a: "10",
  b: 20,
};

console.log(obj.a);

let d = (n) => {
  console.log(n * n);
};

d(31);
