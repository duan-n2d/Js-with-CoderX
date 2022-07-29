//Bai Tap 1
/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

 function sayHello() {
    console.log('I love Coders.Tokyo');
}

function countAndDo(callback) {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
    callback();
}
countAndDo(sayHello);


//Bai Tap 2
/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

function double(number){
    return number*2;
}

function transform(numbers, callback) {
    // Viết nội dung hàm ở đây 
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        doub = callback(numbers[i]);
        result.push(doub);
    }
    return result;
}

numbers =[1,56,8,12]
console.log(transform(numbers, double))