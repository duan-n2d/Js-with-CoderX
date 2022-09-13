//Bai tap 1
/**
 * 1. Require module math
 * 2. Sử dụng method `add` để tính tổng 2 số bất kì
 * 3. Log ra kết quả phép tính tổng ở trên
 */
var math = require('./Math.js');
console.log(math.add(2, 3));

//Bai tap 2
/**
 * 1. Thêm method multiply vào module `math` nhận vào 2 số bất kì, trả về tích 2 số
 * 2. Require module math và tính tích 2 số bất kì dùng method multiply đã tạo ở trên
 * 3. Log ra kết quả
 */
console.log(math.mul(2, 3));


//Bai tap 3
arrNum = [1,3,5,7,9,2,6,10,14];
console.log(math.sum(arrNum));


//Bai tap 4
/**
 *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
 *  4. Test thử
 */
var circle = require('./Circle.js');
var c1 = new circle(1,1,1);
var c2 = new circle(0,0,3);
console.log(c1.isOverlapped(c2));
