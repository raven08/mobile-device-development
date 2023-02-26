//String Literal
const john = {
  fullName: "John Doe",
  age: 35,
  address: "Manado",
};

//Halo, nama saya John Doe, umur saya 35 tahun saya tinggal di Manado
const kalimat5 =
  "Halo, nama saya " +
  john.fullName +
  ", umur saya " +
  john.age +
  " tahun saya tinggal di " +
  john.address;

const kalimat6 = `Halo, nama saya ${john.fullName}, umur saya ${john.age} tahun saya tinggal di ${john.address}`;

//Arrow Function
function greetings5() {
  return `Hello World`;
}

const greetings6 = (fullName) => `Hello ${fullName}`;

let output1 = greetings5();
let output2 = greetings6("John Doe");

let numbers = [1, 2, 3, 4, 5];

let output3 = numbers.map((item) => item * 2);

//Default Parameter
let login = (username, password = "12345") => {
  console.log(`username: ${username}, password: ${password}`);
};

login("johndoe");

//Rest Parameter dan Spread Operator

//1. Rest Paramater

let arrayFunc = (...params) => {
  params.forEach((item) => console.log(item));
};

arrayFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
