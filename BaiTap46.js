// Bai tap 1
/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
//  function countDown(x) {
//     for (var i = x; i >= 0; i--) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     }
//     console.log('Happy new year');
// }
// countDown(5);



// Bai tap 2
/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
 function countDown(x) {
    return new Promise(function(resolve, reject){
        run = setInterval(function(){
            console.log(x);
            x--;
            if (x < 1){
                resolve();
                reject();
                clearInterval(run)
            }
        }, 1000);
    });
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);


// Bai tap 3
// Giong voi Bai tap 2