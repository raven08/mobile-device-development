// Export
//export variabel
export let name ="Tokyo";
//export 'Tokyo';

//export pada objek JavaScript:
export let orang = {
    nama : "Tokyo",
    umur : 38,
    alamat : "Jepang",
};
//export fungtion  
export function sayHello(user){
    console.log(`Hello, ${user}!`);
}
//export secara terpisah variabel, objek, dan fungtion :
let nama ="Tokyo";

let oreng = {
    nama : "Tokyo",
    umur : 38,
    alamat : "Jepang",
};
function sayhello(user){
    console.log(`Hello, ${user}!`);
}

export {nama, oreng, sayhello};

//import
//impoer variabel
//import {data} from "./module1.js";

//export as
const kota = "Tokyo";
let manusia = {
    nama : "Tokyo",
    umur : 38,
    alamat : "Jepang",
};
function katakanDora(dora){
    console.log(`Hello, ${dora}`);
}
export { kota as city, manusia as person, katakanDora as sayDora };

//export untuk import as
export const kotakesukaan = "Tokyo";
export let  people= {
    nama: "Tokyo",
    umur: 38,
    alamat: "Jepang",
  };
export function katakanhello(user){
    console.log(`Hello, ${user}!`);
}
  