//Bai tap 1
/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
  var sum = 0;
  var i = 1;
  while (i < x) {
    sum += i;
    i += 2;
  }
  return sum;
} 
var x = 10;
console.log(sum(x));


// Bai tap 2
/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
function findCommonMultiple(x, y, z) {
  // Function Find Most Common Multiple of two numbers (x,y) and less than a number z
  var mul = x*y;
  while (x != y){
    if (x>y){
      x = x-y;
    } else {
      y = y-x;
    }
  }
  var lcm = mul/x; // lcm = least common multiple
  return z - (z % lcm);
}

var x = 3;
var y = 5;
var z = 1000;
console.log(findCommonMultiple(x, y, z));


// Bai tap 3
/**
 * Thử chạy code sau
 */
 var secretPassword = 'coders.tokyo';
 var readline = require('readline-sync');
 
 var result = readline.question('Nhập vào mật khẩu: ');
 console.log(result);
 
/**
* Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
*/
function checkPassword(password) {
  if (password == secretPassword) {
    return 'Welcome!';
  } else {
    return 'Wrong password';
  }
}
console.log(checkPassword(result));