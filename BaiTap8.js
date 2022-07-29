//++: Làm tăng biến lên 1
// ++: ở trước => Trả về giá trị sau khi +1
// ++: ở sau => Trả về giá trị trước khi +1


//--: Làm giảm biến xuống 1
// --: ở trước => Trả về giá trị sau khi -1
// --: ở sau => Trả về giá trị trước khi -1

//Bai tap 1
var a = 10;
var x = --a + a++;
//  x = 9 + a++; a=9
//  x = 9 + 9; a=10
// x = 18; a=10
console.log(x);

//Bai tap 2
var a = 10;
var b = 18;
var x = a-- + b++ - ++b - ++a;
// x = 10 + 18 - ++b - ++a; a=9, b=19
// x = 10 + 18 - 20 - 10; a=10, b=20
// x = -2; a=10, b=20
console.log(x);