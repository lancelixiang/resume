// 七、动态原型模式
// 原型链在函数体中声明，使用if断言是否已存在原型
function Person() {
  this.name = 'lance';

  if(typeof Person.prototype.sayHi !== 'function' ){
    console.log('only show one time');
    Person.prototype.sayHi = function () {
      console.log('hello, ' + this.name);
    };
  }
}

var person = new Person();
var person2 = new Person();

console.log(person.name);
console.log(person2.sayHi());