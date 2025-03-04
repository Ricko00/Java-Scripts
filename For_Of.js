/**
 * jika for in digunakan untuk oterasi prooerty atau index
 * for of ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti arry, string dan lain-lain
 * for of tidak bisa melakukan iterasi data di object, karena object bukanlah iterable.
 */

//EXampel for of menggunakan aray
const nama = ["tulen", "ganteng", "pisan"];
  for (const halo of nama) {
    console.log(`aku pria ${halo}`);
  }

//Exampel for of menggunakan Sttring
const wau = "aku manusia";
for (const hmm of wau) {
    console.log(`${hmm}`)
}