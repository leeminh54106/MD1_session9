let a = +prompt("nhap so a");

let b = +prompt("nhap so b");

let pheptinh = prompt("nhap phep tinh (+, -, *, /)");

// if (c == "+") {
 
//   alert( a + b);
// }
switch(pheptinh){
    case "+" :
        alert(a+b);
        break;

    case "-" :
        alert(a - b);
        break;
    
    case "*" :
        alert(a * b);
        break;

    case "/" :
        alert(a / b);
        break;
}