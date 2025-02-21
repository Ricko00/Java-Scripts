/*
 ##########
 index di data arry menggunakan number 
 
 Array.push(value)      | Menambahkan Array
 Array.length           | Melihat Panjang Array
 Array[index]           | Mendapatakan data di Posisi index
 Array[index]=value     | mengubah nilai dari index
 Delete array[index]    | mengahapus data index namu index tidak bergeser dan data bisa di gunakan kembali 

array juga dapat membuat array dalam array karana di aray tida ada batasan dalam pembuatan nya.

Array menggunkan []
di dalam array di sebut objek dan di dalam objek di sebut properti dengan di tandai {}

 */

 let nama_hewan = ["sapi", "kambing", "kucing"];
 nama_hewan.push("badak");
 nama_hewan[3]="garuda";
 nama_hewan.push("ular");
 nama_hewan.push([["hewan_Buas"], ["Hewan_Jinak"]]);
 nama_hewan[5][0].push("macan","haimau")
 delete nama_hewan[0];
 console.log(nama_hewan.length);
 console.log(nama_hewan);
 console.log(nama_hewan[0]);

