//Bai tap 1
// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
function powerup(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] = Math.pow(array[i],2);
        }
    }
    return array;
}
array = [1,2,3,4,5,6,7,8,9,10];
console.log(powerup(array));


// Bai tap 2
//................................................................

// Bai tap 3
/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/
function average(array) {
    sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return Math.round(sum/array.length);
}
array = [8, 8, 6.75];
console.log('Average: ',average(array));


// Bai tap 4
// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
function random() {
    return Math.floor(Math.random()*100+1);
}
console.log('Random number: ' + random());


// Bai tap 5
/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/
function rightTriangle(a, b, c){
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }
    return false;
}
console.log('3 canh nhap vao co tao thanh tap giac khong: ',rightTriangle(3,4,5));


// Bai tap 6
/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/
r = 5;
function circumferenceOfCircle(r) {
    return 3.14* 2* r;
}

function acreageOfCircle(r) {
    return 3.14 * r * r;
}
console.log('Chu vi: ',circumferenceOfCircle(r));
console.log('Dien tich: ',acreageOfCircle(r));


// Bai tap 7
/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
**/

function trigonim(number) {
    let sin = Math.sin(number);
    let cos = Math.cos(number);
    let tan = Math.tan(number);
    return [sin.toFixed(3), cos.toFixed(3), tan.toFixed(3)];
}
console.log(trigonim(45));