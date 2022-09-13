//Bai tap 1
/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
var fs = require('fs');
var data = fs.readFileSync('./data.json', 'utf8');
var obj = JSON.parse(data);
console.log(obj.name);
obj.members = [
    {
        name: 'Duy Duan',
        age: 19,
        major: 'Management Information System'
    }
]
fs.writeFileSync('./data.json', JSON.stringify(obj));
var data = fs.readFileSync('./data.json', 'utf8');
var obj = JSON.parse(data);
console.log(obj.members);



//Bai tap 2
/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. JSON là gì?
 * 2. Cấu trúc JSON?
 */
/**
 JSON là tên viết tắt của cụm từ JavaScript Object Notation. JSON là định dạng giúp lưu trữ các thông tin có cấu trúc và nó chủ yếu được dùng để truyền tải dữ liệu. JSON là sẽ sử dụng các cặp key-value để dữ liệu có thể sử dụng. Khi đó, nó sẽ hỗ trợ cho những cấu trúc dữ liệu dạng đối tượng và mảng.
 */


//Bai tap 3
/**
 * Chuyển obj sau về dạng JSON và gán cho biến json
 */
var obj = { name: "CodersX", age: 1 }
var json = JSON.stringify(obj);
console.log(json);
