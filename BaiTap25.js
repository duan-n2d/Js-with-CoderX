//Bai tap 1
/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

var student = {
    name: "CodersX",
    sex: "Male",
    age: 1
}

function showInfo(obj) {
    console.log(obj);
}
showInfo(student);
console.log('-----------------------------');


// Bai tap 2
/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
    delete student[prop];
    return student;
}
console.log(removeProp("name"));
console.log(removeProp("class"));
console.log(removeProp("rollno"));
console.log('-----------------------------');


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
};
//length = 3

function countProperty(obj) {
    return Object.keys(obj).length;
}
console.log(countProperty(student));
console.log('-----------------------------');


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
console.log(shape1);
console.log(typeof(shape3));
console.log(shape2.color);