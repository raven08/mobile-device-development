//Spread Operator
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);

//1. Duplikasi Array & Objek
// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = [...numbers];
// numbers.push(6);
// console.log(numbers2);
// console.log(numbers);

// let john = {
//   fullName: "John Doe",
//   age: 33,
//   address: "Manado",
// };

// let john2 = {
//   ...john,
//   job: "Teacher",
// };

// console.log(john2);

//2. Menggabungkan Array & Object
// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [8, 9, 10];

// let combineNumbers5 = numbers1.concat(4, numbers2, numbers3);
// console.log(combineNumbers5);
// let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
// console.log(combineNumbers6);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// let combineObj = { ...obj1, ...obj2 };
// console.log(combineObj);

// DESTRUCTURING

let numbers = [1, 2, 3, 4, 5];

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
// let d = numbers[3];
// let e = numbers[4];

//Array
//Destructuring array akan selalu melihat urutannya
let [, b, , d] = numbers;
// console.log(b, d);
//Object
let john = {
  fullName: "John Wick",
  age: 33,
  address: "Manado",
};

let { age: umur } = john;
// console.log(umur);

const ucapkanSalam = ({ fullName }) => `Halo nama saya ${fullName}`;
console.log(ucapkanSalam(john));
