/**
 * 1.function adalah blok kode program yg akan berjalan saat kita panggil.
 * 2.untuk membuat function, bisa menggunakan kata function, lalu diikuti
 *   dengan nama functio, kurung() dan diakhiri dengan block Kurunf{}.
 * 3.kita bisa memanggil function dengan menggunakan nama function lalu di ikuti
 *   dengan kurung ().
 * 4. dibahasa pemograman lain, function disebut dengan method
 * 5. nama function tidak boleh mengandung spasi standar nya pakai camel case
 * 6. untuk kode pogram yg sering kita eksekusi
 * 
 * 
 */
//membuat function
function ujanGantenBanget() {
    console.log("Masa iya");
}
//memanggil funcion
ujanGantenBanget();

//menentukan dua persegi memiliki luas yg sama
function bandingkanPersegi(sisi1, sisi2) {
    if(sisi1 <= 0 || sisi2 <=0) return "Sisi harus lebih besar dari 0";

    let luas1 = sisi1 * sisi1;
    let luas2 = sisi2 * sisi2;

    if (luas1 === luas2) {
        return "kedua persegi memiliki luas yg sama";
    } else if (luas1> luas2) {
        return `persegi pertama lebih besar dari ${luas1} > ${luas2}`;
    } else {
        return  `persegi kedua lebih besar dari ${luas2} > ${luas1}`;
    }
    
}
//contoh pengguna
console.log(bandingkanPersegi(4,4));
console.log(bandingkanPersegi(5,2));
console.log(bandingkanPersegi(2,10));



