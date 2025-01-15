//menggunakan if stament
const nilai =80;
let ucapan;

if (nilai>=75) {
    ucapan = "selamat kmu lulus"
} else {
    ucapan = "silahkan coba lagi"
}
console.log(ucapan);

//menggunakan ternary operator apabila ksu sederhan
ucapan = nilai >= 90 ? "selamat kmu lulus" : "silahkan coba lagi";
console.log(ucapan);
