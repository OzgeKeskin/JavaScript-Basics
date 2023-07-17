// IndexOf
let str1 = "search in the string";
let Index1 = str1.indexOf("the");
console.log("full text:", str1);
console.log("the index: ", Index1);
// The'nın bulunduğu indexi bize gösterir.

let str2 = "find the word in this text";
let Index2 = str2.indexOf("word", 15); // 15 karakter geçilsin kalan kısımda word aransın. -1 sonucu verir yani karakter bulunamadı demektir.
console.log("full text:", str2);
console.log("the index: ", Index2);

// LastIndexOf
let str3 = "search in the string";
let index3 = str3.lastIndexOf("in");
console.log("'in' is here : ", index3);
// sağdan sayar ve in bulduğunda durur. string içerisindeki in'i görünce durur.

let index4 = str3.lastIndexOf("the", 12);
console.log("skip 12 chars from reverse, index : ", index4);
//sağdan 12 sayar

// SEARCH  -- like indexof

let str4 = "search in the string";
let found1 = str4.search("the");
console.log("found position : ", found1);

// MATCH
let str5 = "text string for matching regex format";
let matched1 = str5.match(/for/gi);
console.log("matched arr : ", matched1);

// textin içerisinde kaç tane for olduğunu yakalar. ig opsiyonu verdiğimiz için büyük küçük harf fark etmeksizin yakalar.

// INCLUDES
// index numarası yerine var ya da yok döner.
let str6 = "Hello world, welcome to universe";
let includes1 = str6.includes("world");
console.log(includes1);

// STARTSWİTH
let str7 = "hi, startup academy";
let strwith1 = str7.startsWith("hi");
console.log(strwith1); // text hi ile başlıyorsa true, başlamıyorsa false döner.

// ENDSWİTH  --- startswith'in tersi. hi ile bitiyorsa true, bitmiyorsa false döner.
let str8 = "hi, startup academy";
let strwith2 = str8.endsWith("hi");
console.log(strwith2);
