/**
 * for in merupakan perulangan for yg di gunakakn untuk mengiteras seluruh data property di object atau index array
 * bisa digunakan untuk array, namun tidak direkomendasikan untuk array,
 * karena biasanya jarang sekali butuh data index array, kita bisa menggunakan for of
 * 
 */
//object 
const biodata ={
    fristname : "ujang",
    middlename : "atuh",
    lastname : "kasep"
};
//for in 
for (const property in biodata) {
    console.log(`${property}: ${biodata[property]}`);
}
//nama property yg di panggil bukan value property

// dibawah ini contoh dengan array 
const hewan = ["sapi", "kambil", "domba"];
for (const index in hewan) {
  console.log(`${index}: ${hewan[index]}`)
}