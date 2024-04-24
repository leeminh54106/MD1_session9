let a = +prompt("so a");
let b = +prompt("so b");
let c = +prompt("so c");
let max;
let min;

// if(a > b && a > c){
//     max = a
//     if(b > c){
//         min = c
//     }
// }
// if()

if (a > b) {
  max = a;
  min = b;
} else {
  max = b;
  min = a;
}

if (max < c) {
  max = c;
}
if (min > c) {
  min = c;
}
alert("max = " + max + " ; " + " min = " + min);
