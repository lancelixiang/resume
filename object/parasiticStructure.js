// 八、寄生构造函数模式
// 函数体返回修饰后的对象
function SpecialArray() {
  var array = new Array();
  array.push.apply(array, arguments);
  array.toPipedString = function () {
    return this.join("|");
  };
  return array;
}

var colors = new SpecialArray("red", "green", "pink");
console.log(colors.toPipedString());
