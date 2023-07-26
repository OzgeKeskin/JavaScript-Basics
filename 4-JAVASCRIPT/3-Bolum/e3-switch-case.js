const currentDayIndex = new Date().getDay();
// tarih alma fonksiyonudur. önüne 8 || yazarsak 8. case çalışır. 9%6 yaparsak default değer hiç çalışmaz ve bir döngüye girmiş olur.
let day = "";
switch (currentDayIndex) {
  // currentDayIndex==1 ise 1. case çalışır.
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  case 8:
    day = "Sunday";
    break;
  default:
    day = "Monday";
    break;
}
console.log(day);
