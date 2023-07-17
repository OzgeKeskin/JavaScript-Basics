let bool1 = true;
let bool2 = false;

console.log("true: ", bool1);
console.log("false: ", bool2);

// JS'de değeri olmayan her şey false olarak karşımıza çıkar.
let bool3 = Boolean(undefined);
console.log("value of bool3: ", bool3);

let bool4 = Boolean(null);
console.log("value of null: ", bool4);

let bool5 = Boolean(NaN);
console.log("value of null: ", bool5);

let bool6 = Boolean(0);
console.log("value of bool6: ", bool6);

let bool7 = Boolean(1);
console.log("value of bool7: ", bool7);

let bool8 = Boolean(-0);
console.log("value of bool8: ", bool8);

let bool9 = Boolean("");
console.log("value of bool9: ", bool9);

let bool10 = Boolean("11");
console.log("value of bool10: ", bool10);

// BOOLEAN AS OBJECTS
let bool12 = new Boolean(12);
console.log("value of bool12: ", bool12);

let bool13 = new Boolean(-0);
console.log("value of bool13: ", bool13);
