// 五、原型模式
// 使用prototype在对象间共享属性和方法
function Person() {
}

Person.prototype.name = 'lance';
Person.prototype.sayHi = function () {
  console.log('hello, ' + this.name);
};

var person = new Person();

console.log(person.name);
console.log(person.sayHi());