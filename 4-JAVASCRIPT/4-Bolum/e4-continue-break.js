// WİTH FOR
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue; // 5'i yazmaz.
  }
  if (i == 8) {
    break; // 8'den sonra durur.
  }
  console.log(i);
}

// WİTH WHİLE

let counter = 0;
while (counter < 10) {
  counter++;
  if (counter === 5) {
    continue;
  }
  console.log(counter);
  if (counter === 8) {
    break;
  }
}

// WİTH DO WHİLE
let c = 0;

do {
  c++;
  if (c === 5) {
    continue;
  }
  console.log(c);
  if (c === 8) {
    break;
  }
} while (c < 10);
