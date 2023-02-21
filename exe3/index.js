//1
import { ftoc } from "./conversi.js";

let temperaturF = 99.20;
let temperaturC = ftoc(temperaturF);
console.log(temperaturF + "°F = " + temperaturC+ "°C");

//2
import mengitungBMI from "./bmi.js";
let berat = 75; // kilogram
let tinggi = 1.60; // meter
let hasil = mengitungBMI(berat, tinggi);
console.log("BMI: " + hasil.bmi + " (" + hasil.status + ")");


