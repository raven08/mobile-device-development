//Import
// import { nama, person, katakanHello } from "./index.js";

// console.log(nama);
// console.log(person);
// katakanHello(person.alamat);

// // //Import
// import { nama } from "./index.js";
// import {person} from "./index.js";
// import {katakanHello} from "./index.js"

// console.log(nama);
// console.log(person);
// katakanHello (person.alamat);

// //Import As
// import{
//     name as nama,
//     orang as person,
//     sayHello as katakanHello,
// } from "./index.js";

// console.log(nama);
// console.log(person);
// katakanHello(person.nama);

// //Import for export default
// import greetings from "./index.js";

// greetings("Brenda Rambi");

// Import for export-export default
import sayHello, {FONTS} from "./index.js";

sayHello("Brenda Rambi");
console.log(FONTS.normal);