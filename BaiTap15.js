// Bai tap 1
/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
	if (n >= arr.length)
	{
		arr=[];
	}
	else{
		for (var i = 0; i < n; i++){
			arr.pop();
		}
	}
	return arr;
}
arr = [1,2,3,5,7,-5,8];
n=3
console.log(removeEnd(arr,n));

//Bai tap 2
/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

/**
 * 
 */


//Bai tap 3
/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
	// // your code here...
	// var arrkq=arr.slice();
	//  for( i=0; i<arr.length-n;i++)
	//  {
	// 	 arrkq.pop();
	//  }
	//  return arrkq;
	return removeEnd(arr, arr.length-n);
}
console.log(first(arr, n));