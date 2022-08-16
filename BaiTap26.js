//Bai tap 1
function Student ( name, level )
{
  this.name = name;
  this.level = level;
}
Student.prototype.school = 'CodersX';

var Duan = new Student('Duan', 1);
console.log(Duan.school);
console.log("--------------------------------")


// Bai tap 2
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) 
{
    this.diemToan=diemToan;
    this.diemLy=diemLy;
    this.diemHoa=diemHoa;
    
}
  
Student.prototype.average = function() {
    return Math.round((this.diemToan + this.diemLy + this.diemHoa)/3);
}

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);
console.log(student1.average());
console.log(student2.average());
console.log("--------------------------------")
 

  
// Bai tap 3
/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example:
 */
var student = {
    name: "Jerry", 
    age: 14,
    role: "student"
}
 /** lengthObj(student); // length: 3
*/

function countProperty(obj) {
    var count = 0;
    for (var key in obj) {
        count++;
    }
    return count;
}
console.log(countProperty(student));
console.log("--------------------------------")



// Bai tap 4
/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
    this.color = color;
    this.shape = shape;
    this.fill = fill;   
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);
console.log(shape1.color);
console.log(shape2.shape);
console.log(shape3.fill);
console.log(typeof shape3);
  