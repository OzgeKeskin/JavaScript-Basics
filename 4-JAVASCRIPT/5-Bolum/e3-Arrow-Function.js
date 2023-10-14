/* const kareAlani = function (kenar) {
  return kenar ** 2;
};
const sonuc = kareAlani(6);
console.log(sonuc); */

// yukarıdakini arrow fonksiyon olarak şu şekilde yazabiliriz :
/* const kareAlani = (kenar) => {
  return kenar ** 2;
};
const sonuc = kareAlani(6);
console.log(sonuc);  */

// eğer tek parametre varsa parantezleri yazmak zorunda değiliz. Şöyle yazabiliriz :

/* const kareAlani = (kenar) => {
  return kenar ** 2;
};
const sonuc = kareAlani(6);
console.log(sonuc); */

// eğer return tek bir satırsa süslü parantezleri kullanmak zorunda değiliz. Ayrıca returnü de kaldırıp işlemi tek bir satır olarak yazarız.

const kareAlani = (kenar) => kenar ** 2;

const sonuc = kareAlani(6);
console.log(sonuc);

//******************************* */
/* const ad = function () {
  return "ozge";
};

const sonuc2 = ad();
console.log(sonuc2); */

// yukarıdakini arrow funciton olarak şöyle yazabiliriz :
const ad = (ad) => "ozge";
const sonuc2 = ad();
console.log(sonuc2);

//************************************ */
/*const fatura = function (urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(fatura([10, 20, 30], 0.25));  */

// Arrow function olarak şöyle yazabiliriz :

const fatura = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};
console.log(fatura([10, 20, 30], 0.25));

// Method ve Arrow farkı

const name = "ozge";

// Arrow function
const names = () => "ozgee";
let sonuc1 = names();
console.log(sonuc1);

// Method

let sonuc3 = name.toUpperCase();
console.log(sonuc3);
