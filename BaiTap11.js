/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */
 
 var rectangle = {
    width: 5,
    height:  6,
    getWidth: function() { return 'chiều rộng: '+this.width; },
    getHeight: function() { return 'chiều dài: '+this.height; },
    getArea: function() { return 'diện tích: '+this.width * this.height; }
  };

console.log('\n',rectangle.getWidth(),'\n',rectangle.getHeight(),'\n',rectangle.getArea(),'\n');