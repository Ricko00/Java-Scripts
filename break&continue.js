/**
 * break : untuk menghentikan perulangan  
 * continue : menghentikan perulangan lalu melanjutkan nya lagi 
 */

//cotoh break 
let cunter =1;
while (true) {
    console.log(`ulagn ke ${cunter}`)
    cunter++;

    if (cunter > 2) {
        break
    }
}