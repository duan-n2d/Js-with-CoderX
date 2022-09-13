// Bai tap 1
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */
var moment = require("moment");
function isWeekend(dateString) {
    var date = new Date(dateString);
    if (date.getDay()==6 || date.getDay()==0){
        return true;
    }
    else
    {
        return false;
    }
}

 console.log(isWeekend("2022/09/18"));

  

// Bai tap 2
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');

function diff(fromDate, toDate) {
    let ms1 = fromDate.getTime();
    let ms2 = toDate.getTime();
    return Math.ceil((ms2 - ms1) / (1000*60*60*24));
}

console.log(diff(fromDate, toDate));

 
// Bai tap 3
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
    let ms = date.getTime();
    let ms_n = Math.ceil((ms - n*1000*60*60*24));
    let date_pre = new Date(ms_n);
    return `${date_pre.getDate() < 10 ? '0'+ date_pre.getDate() : date_pre.getDate()}/${date_pre.getMonth() < 10 ? '0'+date_pre.getMonth() : date_pre.getMonth()}/${date_pre.getFullYear()}`
}
console.log(subtractDays(date, 200));


// Bai tap 4
/**
 * Tính số ms chênh lệch giữa date b và date a
 */

 function diffMs(a, b) {
    return (a.getTime() - b.getTime()) < 0 ? (-a.getTime() + b.getTime()) :(a.getTime() - b.getTime());   
 }

 var a = new Date("06/10/2019")
 var b = new Date("06/10/2022")
 console.log(diffMs(a, b));