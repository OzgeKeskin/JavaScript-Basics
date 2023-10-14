const ulum = document.querySelector(".main");
// class'ı main olanı seçtik. ve ulum değişkenine atadık.

let ogrenciler = ["ozge", "ezgi", "hale", "dilara"];

let html = ``; // boş html templatei (şablonu)oluşturduk. Şimdi her bir öğrenciyi bu boş template'e basacağız.

ogrenciler.forEach((ogrenci) => {
  html += `<li>${ogrenci}</li>`;
});
console.log(html); // son htmli bastır.

// şimdi bunları ul etiketi içerisine basıp tarayıcıda listeleyelim.

ulum.innerHTML = html;
// ulum içerisine ( yani class'ı main olan etiket içerisine) bu htmlleri bastık.
