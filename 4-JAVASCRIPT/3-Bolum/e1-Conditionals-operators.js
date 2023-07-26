// is Equal
const param1 = 12;
const param2 = 12;
const param3 = "12";
const param7 = 16;
console.log("same type : ", param1 == param2);
console.log("different type : ", param1 == param3);
console.log("different value : ", param2 == param7);
// birbirlerine eşit olup olmadıklarını true veya false olarak yazdırır. Type kıyaslaması yapmaz. bu nedenle string ve number değerlerini aynı kabul edbilir. 1 ve 3te olduğu gibi.

// is Equal with type
const param4 = 15;
const param5 = 15;
const param6 = "15";

console.log("different type : ", param4 === param6);
// type'ları da karşılaştırmak istiyorsak 3 eşittir koyarız.

// not equal with --> "eşit değilse"
// tip karşılaştırması yapmaz.
const param8 = 12;
const param9 = 12;
const param10 = "12";
const param11 = 16;
console.log("same type : ", param8 != param9);
console.log("different type : ", param8 != param10);
console.log("different value : ", param8 != param11);

// not equal with type --> "eşit değilse"
//tip karşılaştırması da yapar.
const param12 = 15;
const param13 = 15;
const param14 = "15";
const param15 = 18;
console.log("same type : ", param12 !== param13);
console.log("different type : ", param12 !== param14);
console.log("different value : ", param12 !== param15);

// Logical Operators
const param17 = 15;
const param18 = 16;
const param19 = 17;

console.log(param17 < param18);
console.log(param18 > param19);
console.log(param17 <= param18);

const bool1 = !(param17 < param18) && param18 > param17; // ve operatörü olduğu için birisi yanlış ise sonuç false çıkar.
const bool2 = param17 < param18 || !(param18 > param17); // veya opeatörü olduğu için ikisinden birinin doğru olması yeterlidir.
const bool3 = !(param17 < param18); // true olan ifade not ile tersine döner.
console.log("LOGICAL OPERATOR AND: ", bool1);
console.log("LOGICAL OPERATOR OR: ", bool2);
console.log("NOT OPERATOR: ", bool3);

// TERNARY IF

const age = 18;
let votable = age < 18 ? false : true;
//   oy verecek kişinin yaşı 18den küçükse false , büyükse true çalışır. ilk soru işareti bu ifadenin true olması durumunda çalışacak ifadeyi (false) döndürür.
console.log("oy kullanabilir mi ? : ", votable); // yaşımız 18di yani true döner.

const agee = 25;
let votablee = agee < 18 ? false : agee > 20 ? "adult-yes" : true;
console.log("2- oy kullanabilir mi? : ", votablee);
