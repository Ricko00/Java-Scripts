/**
 * ##########
 * Tipe data object mirip dengan array
 * yg membedakan adalah index pada tipe data object bisa menggunakan string
 * index di object di sebut artibut atau propertis bukan index
 */

//pembuatan object langusng dengan atribut nya
const person = {
    nama: "ucup",
    alamat: "jambi",
    umur: 18
}
console.log(person);

//gunaka petik dua "" jika artibut menggunakan spasi 
const kabupaten ={
    "jawa barat": "bogor"
}
console.log(kabupaten);
//akses nilai atribut
console.log(`Nama: ${person.nama}`);
console.log(`Alamat:${person.alamat}`);
console.log(`Umur:${person.umur}`);

//tambah artibut object
person.hobi = "silat";
person.status = "singel";
console.log(person)
//edit atibut object
person.umur = 28;
console.log(person)
//Delet attibut object
delete person.status;
console.log(person);