let month = prompt("moi nhap thang vao");
switch (month){
    case"1":
    case"3":
    case"5":
    case"7":
    case"8":
    case"10":
    case"12":
    alert("31 ngay");
    break;
    
    case"2": alert("28 or 29 ngay");
    break;

    case"4":
    case"6":
    case"9":
    case"11":
     alert("30 ngay");
    break;

}