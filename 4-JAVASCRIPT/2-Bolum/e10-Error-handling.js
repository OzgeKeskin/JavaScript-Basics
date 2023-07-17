// throw "500";
// throw 200;
/* throw {
  message: "something is wrong!",
  code: "ERR_SOMETHING_IS_WRONG",
  status: 400,
}; */

/* try {
  const x = 10;
  const y = 20;
  const z = 0;
  z = x + y; // burada hata var.
} catch (err) {
  console.log(err); // log yerine error warn da kullanılabilir. try'ın içinde herhangi bir hata olursa catch ile bunu yakalayabiliriz.
}
// err: hata mesajını taşıyacak değişken. */

// TRY CATCH FINALLY
console.log("islem basladi");
try {
  throw {
    message: "something is wrong!",
    code: "ERR_SOMETHING_IS_WRONG",
    status: 400,
  };
} catch (err) {
  console.warn(err);
} finally {
  console.log("kodumuz calisti ve sonuclar ustte listelendi.");
}

console.log("islem tamamlandi");
