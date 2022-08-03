// Bai tap 1
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

 function tripple(num) {
    return num*3;
  }
  
  function multiply(numbers) {
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = tripple(numbers[i]);
    }
    return numbers;
  }

var numbers = [1, 2, 3, 4, 5];
console.log(multiply(numbers));


// Bai tap 2
// Use array map make an array of strings of the names

var users = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
      
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ]

  function namesOnly(arr) {
    arrayName = [];
    for (var i = 0; i < arr.length; i++) {
      arrayName.push(arr[i].name);
    }
    return arrayName;
  }
console.log(namesOnly(users));


// Bai tap 3
