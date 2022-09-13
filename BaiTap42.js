/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 *
 */

function load(url) {
    return new Promise(function (resolve, reject) {
        axios.get(url)
            .then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            });
    });
}

var axios = require('axios');
Promise.all([
    load('https://jsonplaceholder.typicode.com/todos/1'),
    load('https://jsonplaceholder.typicode.com/todos/2'),
    load('https://jsonplaceholder.typicode.com/todos/3')
]).then(function (values) {
    console.log(values);
}).catch(function (error) {
    console.log(error);
});