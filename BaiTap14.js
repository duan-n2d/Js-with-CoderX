// Bai tap 1
/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */


// Bai tap 2
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
 function multiply(arr) {
    var mul = 1;
    for (var val of arr) {
        mul *= val;
    }
    return mul;
 }
console.log(multiply([1,2,3,4,5]));


// Bai tap 3
/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
    type: 'twin-bed',
    price: 100
    }
  },
};

function getObjectKey(obj, keys=[]) {
    for (var key in obj){
        if ((typeof obj[key] )===  'object') {
            getObjectKey(obj[key], keys);
        }
        keys.push(key);
    }
    return keys;
}
  
result = [];
getObjectKey(apartment, result);
console.log('------------------------------------------------------');
getObjectKey(apartment)

// Bai tap 4
/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
 
function has(object, key) {
    var keys = getObjectKey(object);
    for (var ky of keys) {
        if (ky === key) {
            return true;
        }
    }
    return false;  
}
console.log(has(apartment, 'bedroom'));


// Bai tap 5
/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(numbers) {
    var sum = 0;
    for (var num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sum([1,2,3,4,5]));