// 三、工厂模式
// 函数体中new一个对象，增加属性和方法后返回，调用时不使用new
function person(name) {
  var obj = new Object();
  obj.name = name;
  obj.sayHi = function () {
    console.log('hello, ' + this.name);
  };

  return obj;
}

var person1 = person('lance');

console.log(person1.name);
console.log(person1.sayHi());