// 九、稳妥构造函数模式
// 类似工厂模式，但不使用this
function person(name) {
  var obj = new Object();
  obj.name = name;
  obj.sayHi = function () {
    console.log('hello, ' + name);
  };

  return obj;
}

var person1 = person('lance');

console.log(person1.name);
console.log(person1.sayHi());