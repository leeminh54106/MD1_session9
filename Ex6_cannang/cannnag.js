let weight = +prompt("moi ban nhap can nang");
let height = +prompt("moi ban nhap chieu cao");

let bmi = weight / height ** 2;
if  (bmi < 18, 5) {
  alert("can nang thap");
} else if (bmi >= 18, 5 && bmi <= 24, 9){
  alert("binh thuong");
} else if (bmi >= 25) {
  alert("thua can");
} else if (bmi > 25 && bmi <= 29, 9) {
  alert("tien beo phi");
} else if (bmi >= 30 && bmi <= 34, 9) {
  alert("beo phi cap do 1");
} else if (bmi >= 35 && bmi <= 39, 9) {
  alert("beo phi cap do 2");
}
else{
    alert("qua beo phi")
}