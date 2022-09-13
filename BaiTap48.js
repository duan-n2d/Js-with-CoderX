// Bai Tap 1

var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả = 2
bar();
console.log(a); // Kết quả = 1
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
// Function foo: biến a là biến location còn Function bar: biến a là biến global



// Bai Tap 2

var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13

//Vì foo() là 1 hàm của b, kiểu dữ liệu json, b.foo k tồn tại, chỉ có b.foo() tồn tại nên khi chạy fooCopy thì đây cũng k phải 1 hàm vì nó chưa xác định

