// ********** VAR ************
var x = 5;
var y = 6;
var z = x + y;
console.log(x, y, z);
// var ile değişken belirlediğimiz zaman aynı değişkeni bir kez daha kullanabiliyoruz.
var x = "ozge"; // son yazdığımız çıkar.
console.log(x, y, z);

// ************* LET ***********
//LET = let it be kavramında gelir. (bırakın olsun.) let ile tanımladığımız bir dğeişkeni tekrar tanımlayamayız fakat ilgili değerini değiştirebiliriz.
let a = 5;
let b = 6;
let c = a + b;
console.log(a, b, c);

// let a =10; yapamayız ama
a = 10; // yapabiliriz. yani yeni bir değişken oluşturamayız ama yeni bir değer atayabiliriz.
b = 6;
c = a + b;
console.log(a, b, c);

// ************** CONST ************
// ne tekrar tanımlayabiliriz ne de değerini değiştirebiliriz. kısaca değişkenden ziyade bir parametre tanımalamızı sağlar.

const t = 5;
const v = 6;
const m = t + v;
console.log(t,v,m);

/* const t=6;
t=6;
console.log(t); // console kısmında hata verir. */ 
