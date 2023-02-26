//import
//impoer variabel
import {name} from "./index.js";

//contoh import variabel, objek, fungtion
import { nama, oreng, sayhello} from "./index.js";
// Menggunakan hasil import
console.log(nama);
console.log(oreng);
console.log(oreng.nama);

//import untuk expott as
import { city } from "./index.js";
import { person } from "./index.js";
import { sayDora } from "./index.js";
//import as
import {
    kotakesukaan as favcity,
    people as newpeople,
    katakanhello as sayhelllo,
} from "./index.js"

import sayHello from "./greeting.js";
sayhello("Tokyo");