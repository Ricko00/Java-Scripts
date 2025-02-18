//untuk js kita bisa menggunakan type dana anda dan or unutk tipe data non boolean 
/**operator OR
 * operator OR || membaca dari kiri ke kanan
 * operator ini akan mengambil nilai pertama yg trurhy
 * jika tidak ada satupun  yg bernilai truty, maka yg terakhir akan di ambil 
 * 
 */
  console.log("hell0" || '');//hell > karena di ambil dari kiri
  console.log("" || []);// []>kerana aray ini trutry dan "" string kosong
  console.log("0" || "NOL");//0 > kerena di ambil dari kiri
  console.log(0 || "NOL");// NOL > karena 0 itu falsery 

//exampel 
const person = {
    fristname : "",
    lastname :" riko"
};

const name = person.fristname || person.lastname;
console.log(name)

/**untuk  */