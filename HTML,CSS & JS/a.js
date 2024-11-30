// // console.log(a);

// // var a = 864397563497;
// // console.log(a);
// // // console.log(b);

// // let b = "dfdf";
// // b = 34;
// // console.log(b);
// // // console.log(c);

// // const c = 23;
// // c = 3212;
// // console.log(c);

// printName();
// console.log(printName);

// // Function declaration
// function printName() {
//   console.log("hello");
// }
// console.log(printName);

// // Function invocation
// printName();

// // a();
// console.log(a);

// // Function Expression
// var a = function () {
//   console.log("Hello world");
// };
// console.log(a);

// a();

// // Arrow Function
// var b = (parameter) => {
//   console.log("hello from Arrow function", parameter);
// };

// b(23);

// console.log(b);

// let squarer = (aa) => {
//   console.log(aa * aa);
// };

// squarer(3);

// If Else
let a = "2";
if (a === 2) {
  console.log("Value is 2");
} else {
  console.log("Value is not same");
}

// else if
let b = 31;
if (b === 2) {
  console.log("Value is 2");
} else if (b == 3) {
  console.log("Value is 3");
} else {
  console.log("Value is not same");
}

var arr = [1, 2, 3, 4, "fgerg", 66, 89];
arr.push("56");
arr.pop();

arr.shift();
arr.unshift("jhsdgjshf");

console.log(arr);

const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < table.length; i++) {
  if (table[i] == 5) {
    console.log("value is 5");

    break;
  } else {
    console.log(table[i] * 2);
  }
}

var aa = table.map((value, index) => {
  return value * index;
});

console.log(aa);
console.log(table);

var bb = table.filter((value) => {
  if (value < 8) {
    return value;
  }
});

console.log(bb);

const cc = table.reduce((accumlator, currentValue, i) => {
  console.log(
    "accumulator ",
    accumlator,
    "Currnet Value",
    currentValue,
    "indes",
    i
  );

  return accumlator + currentValue;
}, 0);
console.log(cc);

var jk = {
  key: "value",
  a: 10,
  obj: {
    fg: "dhfgdh",
    y: 9,
  },
};

console.log(jk.obj.y);
