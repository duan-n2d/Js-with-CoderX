//Bai Tap 1
/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */
var request = require('request');
console.time();
request('https://randomuser.me/api/', function (error, response, body) {
  console.timeEnd();
  console.log(body);
});


// Bai Tap 2
/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */
var axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.log(error);
  }).then(function () {});

axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.log(error);
  }).then(function () {});