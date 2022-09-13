/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

function showMenu() {
  console.log('1. Nhập dữ liệu contact');
  console.log('2. Sửa dữ liệu contact');
  console.log('3. Xoá contact');
  console.log('4. Tìm kiếm contact');
  console.log('5. Thoát');
}

function main() {
  showMenu();
  var choice = Number(readline.question('Chọn chức năng cần thực hiện: '));
  switch (choice) {
    case 1:
      addNewContact();
      break;
    case 2:
      editContact();
      break;
    case 3:
      deleteContact();
      break;
    case 4:
      searchContact();
      break;
    case 5:
      console.log('Bye bye!');
      break;
    default:
      console.log('Không hợp lệ!');
      break;
  }
}