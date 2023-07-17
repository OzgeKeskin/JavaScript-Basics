let num1 = 10;
let str1 = num1.toString();
console.log("value:", num1);
console.log("string value : ", str1);

// EXPONENTİAL
let num2 = 10;
let num3 = num2.toExponential(2); //2. basamağa kadar exponential yazar.
console.log("Exponential of fragment 2:", num3);

let num4 = 10;
let num5 = num4.toExponential(3); // 3 tane 0 olur.
console.log("Exponential of fragment 2:", num5);

// TO FİX
let num6 = 96.273283723;
let num7 = num6.toFixed(0);
console.log("fixed 0 value: ", num7);

let num8 = 96.273283723;
let num9 = num8.toFixed(3); // virgülden sonra 3 basamak daha yazar.
console.log("fixed 0 value: ", num9);

// ToPrecision
let num10 = 96.5;
console.log("value:", num10);
let num11 = num10.toPrecision(4);
console.log("precision auto value:", num11);

// VALUEOF
let num13 = new Number(960000.5);
console.log("value:", num13);
let num14 = num13.valueOf();
console.log("value of number object:", num14);

// PARSEINT  --> string olan sayıyı int'e çevirir. çevirirken ondalık kısmını almaz. ve yuvarlama yapmaz.
let num15 = "654.8356548";
console.log("value:", num15);
let num16 = parseInt(num15);
console.log("parsed int value:", num16);

// PARSEFLOAT --> string olan sayıyı floata çevirir. ondalık kısmını alır.
let num17 = "-15.584562";
console.log("value:", num17);
let num18 = parseFloat(num17);
console.log("parsed float value:", num18);
