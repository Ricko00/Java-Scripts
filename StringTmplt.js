//String templert menggunakan tandan `` dan $
//mensibtitusi variable dan expresion
//contoh setring lama
const Nama = "muhammad riko ";
const fristName = "Muhammad";
const LastName = "Riko";
const value = 80;

const lama = "Nama : " + Nama + fristName + " " + LastName ;
const template = `Name : ${Nama}${fristName}${LastName}, Lulus : ${value>60}`;
console.log(lama);
console.log(template);

