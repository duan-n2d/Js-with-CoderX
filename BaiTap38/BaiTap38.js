/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

function showMenu() {
  console.log('-------------------------');
  console.log('1. Nhập dữ liệu contact');
  console.log('2. Sửa dữ liệu contact');
  console.log('3. Xoá contact');
  console.log('4. Tìm kiếm contact');
  console.log('5. Hiển thị danh bạ');
  console.log('6. Thoát');
  var choice = readlineSync.question('Chọn chức năng cần thực hiện: ');
  switch (choice) {
    case '1':
      addNewContact();
      showMenu();
      break;
    case '2':
      editContact();
      showMenu();
      break;
    case '3':
      deleteContact();
      showMenu();
      break;
    case '4':
      searchContact();
      showMenu();
      break;
    case '5':
      showContact();
      showMenu();
      break;
    case '6':
      console.log('Bye bye');
      break;
    default:
      console.log('Không hợp lệ!');
      showMenu();
      break;
  }
}

function loadData() {
  var data = fs.readFileSync('./DataBaiTap38.json');
  contacts = JSON.parse(data);
}

function showContact() {
  for (var contact of contacts) {
    console.log(contact.name + ' - ' + contact.phoneNumber);
  }
}

function addNewContact() {
  var name = readlineSync.question('Nhập tên: ');
  var phoneNumber = readlineSync.question('Nhập số điện thoại: ',{encoding: 'utf8'});
  var newContact = { name: name, phoneNumber: phoneNumber};
  contacts.push(newContact);
  saveData();
}

function editContact() {
  var flag = false;
  var name = readlineSync.question('Nhập tên cần sửa: ');
  var phoneNumber = readlineSync.question('Nhập số điện thoại cần sửa: ',{encoding: 'utf8'});
  for (var contact of contacts) {
    if (contact.name === name && contact.phoneNumber === phoneNumber) {
      flag = true;
      var newName = readlineSync.question('Nhập tên mới: ');
      var newPhoneNumber = readlineSync.question('Nhập số điện thoại mới: ',{encoding: 'utf8'});
      contact.name = newName;
      contact.phoneNumber = newPhoneNumber;
      console.log('Sửa thành công!');
      saveData();
    }
  }
  if (flag === false) {
    console.log('Không tìm thấy contact!');
  }
}

function deleteContact() {
  var flag = false;
  var name = readlineSync.question('Nhập tên cần xoá: ');
  var phoneNumber = readlineSync.question('Nhập số điện thoại cần xoá: ',{encoding: 'utf8'});
  for (var contact of contacts) {
    if (contact.name === name && contact.phoneNumber === phoneNumber) {
      flag = true;
      contacts.splice(contacts.indexOf(contact), 1);
      console.log('Xoá thành công!');
      saveData();
    }
  }
  if (flag === false) {
    console.log('Không tìm thấy contact!');
  }
}

function searchContact() {
  var result = [];
  var keyword = readlineSync.question('Nhập từ khóa cần tìm: ');
  for (var contact of contacts) {
    if (contact.name.toLowerCase().includes(keyword.toLowerCase()) || contact.phoneNumber.includes(keyword)) {
      console.log(contact.name + ' - ' + contact.phoneNumber);
      result.push(contact);
    }
  }
}

function saveData() {
  var data = JSON.stringify(contacts);
  fs.writeFileSync('./DataBaiTap38.json', data, {encoding: 'utf8'});
}

function main() {
  loadData();
  showMenu();
}
//---------------------------------Program-------------------------------------
var readlineSync = require('readline-sync');
readlineSync.setDefaultOptions({ encoding: 'utf8' });
var fs = require('fs');
var contacts = [];
main()