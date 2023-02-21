export default function mengitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    if (bmi < 18.5) {
    return { 
        bmi: bmi, 
        status: "Kurus" };
    } else if (bmi < 25) {
    return { 
        bmi: bmi, 
        status: "Normal" };
    } else if (bmi < 30) {
    return { 
        bmi: bmi, 
        status: "Kegemukan" };
    } else {
    return { 
        bmi: bmi, 
        status: "Obesitas" };
    }
    }