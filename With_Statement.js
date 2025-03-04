/**
 * fitur yang digunakan untuk menurunkan sebuah scope data
 * kita bisa mangakses property dalam sebuah data tanpa harus
 *  menyebut data nya
 */

// tidak menggunakan whit Statement 
//object
const person={
    fristname: "muhammad",
    lastname: "jajang"
}

console.log(person.lastname)

//with statemnt
const baba ={
    bajukesukaan: "kaos pendek",
    celanakesukaan: "jeans"
}

with(baba){
    console.log(bajukesukaan)
}