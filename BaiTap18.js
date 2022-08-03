// Bai tap 1
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var arrayResult = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            arrayResult.push(arr[i]);
        }
    }
    return arrayResult;
}
numbers = [3, 6, 8, 2];
console.log(fiveAndGreaterOnly(numbers));


// Bai tap 2
// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    var arrayResult = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrayResult.push(arr[i]);
        }
    }
    return arrayResult;
}
console.log(evensOnly(numbers));


// Bai tap 3
/**
 * Give a list of students, filter out non-female 
 */
 
 var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
    arrayResult = [members]
    for (var i = 0; i < members.length; i++) {
        if (members[i].gender !== 'female') {
            arrayResult.push(members[i]);
        }
    }
    return arrayResult;
}
console.log(filterOutFemales(members));