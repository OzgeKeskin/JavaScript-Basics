//*************** Fonksiyon Çağırma ****** */
function meyveler() {
  console.log("elma", "armut");
}
meyveler(); // fonksiyonu çağırdık.

isimler(); // önce fonksiyonu çağırıp sonra da tanımlayabiliriz.
function isimler() {
  console.log("ozge", "ezgi");
}

const sebzeler = function () {
  console.log("pirasa", "ispanak");
};
sebzeler(); // değişkeni fonksiyona atayıp çağırdık.

//*******Fonksiyona Parametre Verme ********* */

const fullName = function (ad = "ezginur", soyad = "keskin") {
  console.log("ad:", ad + " ", "soyad:", soyad);
  console.log(`Ad Soyad : ${ad} ${soyad}`);
  // console ile iki şekilde de yazdırabiliriz.
};
fullName(); // burada boş gönderdiğimiz için yukarıda atadığımız değeri yazdırır.
fullName("ozge", "keskin"); // burada parametre gönderdiğimiz için yukarıdakini ezer.

// ***** Fonksiyonlarda Return İşlemi ****

const kareAlani = function (kenar) {
  let alan = kenar ** 2;
  console.log(alan);
};
kareAlani(6);
// böyle de yapabiliriz fakat böyle yaptığımızda alan değişkenini globalde kullanamayız. Çünkü fonksiyonun içerisinde belirledik. Bunu yapmanın daha iyi bir yolu vardır :

const karealani = function (kenari) {
  let alani = kenari ** 2;
  return alani;

  // return kenari**2; direkt böyle de yapabiliriz.
};
const sonuc = karealani(6);
console.log(sonuc);
