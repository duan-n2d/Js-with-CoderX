// Bai tap 1
// Nội dung đề
// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)
function sortNumber(array){
    array.sort(function(a,b){return a-b});
    return array;
}
arrayNumber = [100,21,32,41,5,6,7,8,9,10];
console.log(sortNumber(arrayNumber));


// Bai tap 2
//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
function sortNumberDescending(array){
    //Cach 1
    array.sort(function(a,b){return b-a});
    return array;
    //Cach 2
    // return array.reverse();
}
console.log(sortNumberDescending(sortNumber(arrayNumber)));


// Bai tap 3
// ** Nội dung đề **
// Sort an array from shortest string to longest
function sortLength(array){
    array.sort(function(a,b){return a.length-b.length});
    return array;
}
arrayString = ["cmnbbb","ae","abcd","cde","abcdefg"];
console.log(sortLength(arrayString));


// Bai tap 4
// ** Nội dung đề **
// Sort an array alphabetically
function sortAlphabetically(array){
    return array.sort();
};
console.log(sortAlphabetically(arrayString));


// Bai tap 5
// ** Nội dung đề **
// Sort the objects in the array by age
function sortByAge(array){
    array.sort(function(a,b){return a.age-b.age});
    return array;
}   
arrayObject = [{ name: 'Quiet Samurai', age: 22 },{ name: 'Unlucky Swami', age: 77 },{ name: 'Misunderstood Observer', age: 2 }, { name: 'Quiet Samurai', age: 222 }, { name: 'Unlucky Swami', age: 70 }, { name: 'Arrogant Ambassador', age: 100 }];
console.log(sortByAge(arrayObject));


// Bai tap 6
/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
function sortByScore(array){
    array.sort(function(a,b){return b.score-a.score});
    return array.slice(0,3);
}
arrayObject = [{ name: 'Quiet Samurai', score: 22 },{ name: 'Unlucky Swami', score: 77 },{ name: 'Misunderstood Observer', score: 2 }, { name: 'Quiet Samurai', score: 22 }, { name: 'Unlucky Swami', score: 57 }, { name: 'Arrogant Ambassador', score: 100 }];
console.log(sortByScore(arrayObject));