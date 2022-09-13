// Bai tap 
/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'A':
            case 'a':
                result.push(1);
                break;
            case 'B':
            case 'b':
                result.push(2);
                break;
            default:
                result.push(0);
                break;
        }
    }
    return result;
}
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'x', 'y', 'z'];
console.log(transform(arr));
  