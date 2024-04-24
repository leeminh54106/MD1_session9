let date = +prompt("nhap ngay sinh");
let month = +prompt("nhap thang sinh");

switch (month) {
  case 1:
    if (20 <= date <= 31) {
      alert("cung bao binh");
    } else {
      alert("ma ket");
    }
    break;

  case 2:
    if (date <= 18) {
      alert("bao binh");
    } else {
      alert("song ngu");
    }
    break;

  case 3:
    if (date <= 20) {
      alert("song ngu");
    } else {
      alert("bach duong");
    }
    break;

  case 4:
    if (date <= 19) {
      alert("bach duong");
    } else {
      alert("kim nguu");
    }
    break;

  case 5:
    if (date <= 20) {
      alert("kim nguu");
    } else {
      alert("song tu");
    }
    break;

  case 6:
    if (date <= 21) {
      alert("song tu");
    } else {
      alert("cu giai");
    }
    break;

  case 7:
    if (date <= 22) {
      alert("cu giai");
    } else {
      alert("su tu");
    }
    break;

  case 8:
    if (date <= 22) {
      alert("su tu");
    } else {
      alert("xu nu");
    }
    break;

  case 9:
    if (date <= 22) {
      alert("xu nu");
    } else {
      alert("thien binh");
    }
    break;

  case 10:
    if (date <= 23) {
      alert("thien binh");
    } else {
      alert("ho cap");
    }
    break;

  case 11:
    if (date <= 21) {
      alert("ho cap");
    } else {
      alert("nhan ma");
    }
    break;

  case 12:
    if (date <= 21) {
      alert("nhan ma");
    } else {
      alert("ma ket");
    }
    break;
}

// switch (month) {
//   case 1:
//     date <= 19 ? console.log("ma ket") : console.log("bao binh");
// }
