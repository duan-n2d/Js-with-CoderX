// Bai Tap 1
var fs = require('fs');
// var axios = require('axios');

// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

// data.json
// [
//   { "id": 1, "name": "Huy"},
//   { "id": 2, "name": "Minh"}
// ]

function readUrlPromise(url){
    return new Promise ( function(resolve, reject) {
        axios.get(url)
        .then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            reject(error);
        });
    })
}
function  readPathPromise(path){
    return new Promise ( function(resolve, reject){
        fs.readFile(path, {encoding : "utf8"}, function(err, data){
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

async function runAsyncAwait(){
    var file = await readPathPromise("./data.json");
    var url = await readUrlPromise("https://jsonplaceholder.typicode.com/todos/1")
    console.log(file, '\n', url)
}
runAsyncAwait()

// Bai Tap 2
const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1.
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2.
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];

fetchUrls(urls).then(() => console.log('Done'));
fetchUrlsParallel(urls).then(() => console.log('Done 2'));
