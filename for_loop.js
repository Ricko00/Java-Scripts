/**
 * for adalah kata kunci untuk perulangan akan terus berulang jika kondisi terpenuhi 
 * dan akan terus berulang sampai kondisi tidak terpenuhi
 */
//sintak 
/*for(init statement;kondis;post statement){
    //block perulangn
}*/
//kode ini tidak menggunakan init statement
let counter = 1;
for(;counter <= 2;){
    console.log(`perulangan ke ${counter}`);
    counter++;
}
//kode ini menggunakan init statement
for(let angka =1; angka <= 10; angka++){
    console.log(`ini adalah jumlah ke ${angka}`);
}