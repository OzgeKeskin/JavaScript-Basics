let yas = 23;
// let yas=30; --> hata verir.

if (true) {
  let yas = 30;
  console.log("icerideki: ", yas);
  if (true) {
    let yas = 55;
    var ad = "ozge";
    console.log("iceridekinin icindeki: ", yas, ad);
  }
}

console.log("disaridaki: ", yas, ad);

// if içerisinde tanımlanan let if içerisinde kalır. globalde tanımlanan let ise globalde geçerlidir.
// if içinde var tanımlarsak hem içerde hem globalde geçerli olur.
