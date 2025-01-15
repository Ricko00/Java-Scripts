/**
 * Nullis value adalah null dan undefined
 * jika di ternary menggunakan ? untuk Nullist coalescing operator menggunakan ?? yg 
 * membedakan nya adlh kondisi jika null atau undefined, baru velue default nya akan diambil
 * 
 */
// contoh tanpa nulis
let parameter = "riko";

let data = parameter
 if(data === undefined || data === null){
    data = "Nilai default"
 }

 console.log(`${data}`);
 
 // contoh dengan nullst

data = parameter ?? "wau"
console.log(`${data}`);