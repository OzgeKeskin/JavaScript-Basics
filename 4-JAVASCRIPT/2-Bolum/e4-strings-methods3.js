// CHARAT
let text = "HELLO WORLD";
let char = text.charAt(0); // gets the 0th character
console.log(char);

// CHARCODEAT
let text2 = "HELLO WORLD";
let char2 = text.charCodeAt(0); // The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(char2);

// PROPERT ACCESS
let text3 = "HELLO WORLD";
let char3 = text[0]; //propert access is unpredictable
console.log(char3);

// SPLİT
//A string can be converted to an array with the split() method:
let text4 = "a,b,c,d,e,f";
console.log("normal string : ", text4);
const myArray = text4.split(",");
console.log("array : ", myArray);
