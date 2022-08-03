// Bai tap 1
/** Nội dung đề **
* Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
* Nếu không tìm thấy số chẵn nào thì trả về undefined
*/
function findFirstEvenNumber(arr) {
    for( i=0; i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            return arr[i];
        }
    }
    return undefined;
}
arrayNumber = [1,2,3,4,5,6,7,8,9,10];
arrayNumberNotEven = [1,3,5,7];
console.log(findFirstEvenNumber(arrayNumber));
console.log(findFirstEvenNumber(arrayNumberNotEven));


// Bai tap 2
/** Nội dung đề **
/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */
function findDivisibleNum(array, x) {
    for(i=0;i<array.length;i++)
    {
        if(array[i]%x==0)
        {
            return array[i];
        }
    }
    return undefined;
}
arrayNumber = [1,2,3,4,5,6,7,8,9,10];
x = 5;
y =11;
console.log(findDivisibleNum(arrayNumber,x));
console.log(findDivisibleNum(arrayNumber,y));