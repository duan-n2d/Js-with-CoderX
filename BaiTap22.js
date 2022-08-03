// Bai tap 1
// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */
 function flatten(arr) {
    arrayFlatten = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            arrayFlatten.push(arr[i][j]);
        }
    }
    return arrayFlatten;
 }
 var arrays = [["1", "2", "3"],[true],[4, 5, 6]];
 arrResult = flatten(arrays);
 console.log(arrResult);


 // Bai tap 2
 /**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
    var obj = {};
    for (i = 0; i < array.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    return obj;
}
var array = ['a', 'b', 'c', 'b', 'a'];
console.log(countOccurrences(array));