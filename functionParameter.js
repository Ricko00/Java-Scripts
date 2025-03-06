/**kita bisa mengirim informasi ke function yang ingin kita panggil
 * untuk melakukan hal tersebut, kita perlu manambahkan parameter atau argument di function yang sudah kita buat
 * parameter di tempatakan didalam kurung() dideklarasi method
 * pembuatan parameter seperti variable cuman bedan nya tidak perlu menggunkan 
 * kata kunci let atau const, var. langsung sebutkan para metern ya
 * parameter bisa lebih dari satu,jika lebih dari satu maka gunakan tanda koma sebagai pemisan patameternya 
 */

function kesukaan(makanan, minuman) {
    console.log(`saya suka ${makanan} dan ${minuman} `); 
}

kesukaan("apel", "kopi");

//contoh 2
function cekBuakKesukaan(nama, buah) {
    if( !nama || !buah){
        return "nama buah tidak boleh kosong nanti di hanca"
    }
    //arry
    let buahFavorit = ["jeruk","apel","nangka","pisang"];
    
    if (buahFavorit.includes(buah.toLowerCase())) {
        return `${nama} suka ${buah}? Wah, itu enak sekali`;
    } else {
        return `${nama} tidak suka ${buah}? Tidak apa-apa, Seleran orang beda-beda`
    }
}

//pemanggilan 
console.log(cekBuakKesukaan("jajang", "apel"));
console.log(cekBuakKesukaan("jajang", "melon"));
console.log(cekBuakKesukaan("","pisang"));