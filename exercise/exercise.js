// alert:trả ra undefine, thường dùng để hiện thông báo
// prompt: để nhập thông tin, trả về string khi có nhập,
//         trả về null khi ấn hủy
// confirm: để xác nhập đồng ý hoặc ko, true/false
// var: khai báo lại được,gán lại được, kích hoạt hoisting
// let:ko khai báo,gán lại,ko kích hoạt hoisting
// const:ko khai báo,gán,kích hoạt hoisting

// ----------------------------dữ liệu cơ bản---------------------------

//Number:lưu số nguyên, thập phân
//string: lưu chuỗi, được bọc trong'',"",``
//boolean:true,false
//Nan: not a number, lưu những giá trị liên quan đến số nhưng không phải là số
//undefined:không xác định, khi khai báo mà chưa gán giá trị gì
//null:khi chúng ta cố tình gán là null



// ----------------------------toán tử---------------------------

//+, -, *, /, %, **
// tiền tố, hậu tố: đều là dấu ++,-- chỉ khác nhau vị trí đứng (trước ,sau)


// let a = 10;
// let b = a++ + a++ - a-- + a++;
// console.log('ket qua', b);


// +=, -=, /=, %=, **=

// if       else if      else

    // if if if ra nhiều dòng
    // if  else if  elsa if :chỉ ra 1 dòng kết quả

//switch   case

// let month = 7;

// switch (month) {
//     case :
//     case :
//     case :
//     case :
//     case :
//     case :
//     case :
//     case :
//     case :
// }

// if (year % 4 == 0) 
// {
//     if (year % 100 == 0) 

//          { if (year % 400 == 0) { alert(year + " is a leap year"); }

//              else  { alert(year + " is NOT a leap year"); }

//          }       
//          else {alert(year + " is a leap year");}

//  }   else { alert(year + " is NOT a leap year");}


let year = +prompt("input of year");
if(year % 4 == 0) {
    if(year % 100 == 0){

        if(year % 400 == 0){

                alert(year + "yes");



        }else{alert(year + "not");}
   
   
    }else{alert(year + "yes");}



}else{alert(year + "not");}