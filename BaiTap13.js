// Bai tap 1
/**
* Dùng vòng lặp for kiểm tra số nguyên tố.
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/
function isPrimeNumber(x) {
    if (x>1) {
        count = 1;
        for (var i = 2; i<(x/2); i++) {
            if (x % i == 0) {
                count++;
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
};
console.log(isPrimeNumber(2));


// Bai tap 2
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
 function fromCharCode() {
    for (var i =97; i<=122; i++) {
        console.log(String.fromCharCode(i),'\t');
    }
}
console.log(fromCharCode());


// Bai tap 3
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    var sum = 0;
    for (var i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}
arr = [1,3,4,5,16];
console.log(sum(arr));


// Bai tap 4
// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
function mulArray(array) {
    var mul =1 ;
    for (var i=0; i<array.length; i++){
        mul *= array[i];
    }
    return mul;
}

function sumMultiplyArray(a, b) {
    return mulArray(a) * mulArray(b);
}
var a = [1, 2, 3];
var b = [10, 20];
console.log(sumMultiplyArray(a, b));

// Bai tap 5
/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    var mul=start;
    for (var i = start+1; i < end; i++) {
        mul *= i;
    }
    return mul;
}
console.log(calculate(2, 5));


// Bai tap 6
/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
    for (var i = 0; i < array.length; i++){
        if (array[i]== value){
            return true;
        }
    }
    return false;
}
var array = [1, 2, 3, 4, 5];
value = 3;
console.log(has(array, value));


// Bai tap 7
function factorials(number) {
    var fac=1;
    for (var i=1; i<=number; i++){
        fac *= i;
    }
    return fac;
}
console.log(factorials(5));