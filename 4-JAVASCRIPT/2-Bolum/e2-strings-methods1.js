// SLİCE
let str1 = "Apple, Banana, Kiwi";
let part1 = str1.slice(7, 13); // show 7 to 13 chrc.
console.log("defaul value: ", str1);
console.log("sliced value: ", part1);

let str2 = "Apple, Banana, Kiwi";
let part2 = str2.slice(-12, -6); // 12th character in reverse to 6th character
console.log("sliced value:", part2);

// SUBSTRİNG
// it's similar to slice. the only difference is substring can't take negative values.

let str3 = "Apple, Banana, Kiwi";
let part3 = str3.substring(15, 19);
console.log("substring value:", part3);

// SUBSTR
// it's similar to others. The only difference is substr's second parameter specifies the length of the first parameter. f.ex:

let str4 = "Apple, Banana, Kiwi";
let part4 = str4.substr(0, 5); // 5 characters after 0
console.log("substr value:", part4);
