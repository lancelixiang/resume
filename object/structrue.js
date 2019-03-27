// 四、构造函数模式
// 函数中的参数赋值在this上，无返回，调用时使用new
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log('hello, ' + this.name);
  }
}

var person = new Person('lance');

console.log(person.name);
console.log(person.sayHi());