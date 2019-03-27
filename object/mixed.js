// 六、混合模式
// 构造函数模式+原型模式
function Person() {
  this.name = 'lance';
}

Person.prototype.sayHi = function () {
  console.log('hello, ' + this.name);
};

var person = new Person();

console.log(person.name);
console.log(person.sayHi());