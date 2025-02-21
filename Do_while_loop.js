/**
 * sama seperti while_loop yg membedakan itu pengecekan kondisi nya 
 * pengecekan kodisi while loop dilakukan di awal sebelum perulangan dilakukan,
 * sedangkan Do while loop dilakukan setelah perulangan dilakukan 
 * oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan
 * walaupun kondisi tidak bernilai true atau bernilai false
 */
//contoh yg bernilai false 
let counter = 1000
do {
     console.log(`ini ulang ke ${counter}`);
     counter++
} while (counter <= 10);

//contoh yg bernilai true
let benar = 1
do {
    console.log(` akan di ulang ke${benar}`);
    benar++
} while (benar <=2);