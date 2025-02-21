//continue : menghentikan perulangan lalu melanjutkan nya lagi 
//example
 for(let i = 1; i <=50; i++ ){
    if (i % 2 === 0) {
        continue;
        
    }
    
    console.log(`ini  ganjil ${i}`);
 }
 /**
   kalau i nya itu habis dibagi 2 kita akan continue
 hasil akan bilangan ganji kenapa ? karean pada masuk 
 bilangan genap dia akan continue tidak akan diesekusi kebawah nya
 **/