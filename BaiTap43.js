/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
 var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
  // Cách 1: Sử dụng vòng lặp for
  
  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise

var co = require('co');
var axios = require('axios');

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
//Promise vs Array.map
// co(function* () {
//   var results = yield urls.map(load);
//   return results;
// })
// .then(function (results) {
//   console.log(results);
// })
// .catch(function (error) {
//     console.log(error);});

// Promise vs For
co(function* () {
  for (var i = 0; i < urls.length; i++) {
    var result = yield load(urls[i]);
    console.log(result);
  }
})
.then(function (results) {
    console.log(results);
})
.catch(function (error) {
    console.log(error);
  });

// var readUrls =  co.wrap(function*(urls){

// });