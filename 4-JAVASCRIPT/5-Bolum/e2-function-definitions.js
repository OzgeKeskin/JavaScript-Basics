//********* 1. fonsiyon tanımlama şekli
// DEFAULT FUNCTİON DEFINITION
function isTrue(param) {
  const bool = param === null || param === undefined || param === ""; // bunlara eşitse false döner
  return !bool; // değilse true döner.
}

console.log("null:", isTrue(null));
console.log("undefined:", isTrue(undefined));
console.log("empty:", isTrue(""));
console.log("test:", isTrue("test"));

//********* 2. fonsiyon tanımlama şekli
// INLINE FUNCTION DEFINITION
const isTrue2 = function (param2) {
  const bool2 = param2 === null || param2 === undefined || param2 === "";
  return !bool2;
};
console.log("null:", isTrue(null));
console.log("undefined:", isTrue(undefined));
console.log("empty:", isTrue(""));
console.log("test:", isTrue("test"));

//********* 3. fonsiyon tanımlama şekli
// ARROM (=>) FUNCTION DEFINITION

const isTrue3 = (param3) => {
  const bool3 = param3 === null || param3 === undefined || param3 === "";
  return !bool3;
};
console.log("null:", isTrue(null));
console.log("undefined:", isTrue(undefined));
console.log("empty:", isTrue(""));
console.log("test:", isTrue("test"));

// SELF-INVOKING FUNCTION

const bool4 = (function (param4) {
  const bool4 = param4 === null || param4 === undefined || param4 === "";
  return !bool4;
})("test");
console.log("test:", bool4);
