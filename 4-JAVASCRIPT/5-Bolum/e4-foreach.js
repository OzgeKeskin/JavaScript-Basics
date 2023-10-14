let ogrenciler = ["ozge", "dilara", "ezgi", "hale"];

ogrenciler.forEach(function () {
  console.log("selam");
});

ogrenciler.forEach(function (kisi) {
  console.log(kisi);
});
// fonksiyona parametre verdik. Her bir elemanı konsola basar. 1. parametre -- string
// 2. parametre -- index 3. parametre -- array

ogrenciler.forEach(function (kisi, index) {
  console.log(kisi, index);
});
// elemanı ve indexlerini basar.

// function expression 
const ogrenci = (kisi, index) => {
  console.log(`${index} - ${kisi}`);
};
ogrenciler.forEach(ogrenci);
