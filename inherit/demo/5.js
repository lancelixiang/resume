// 组合继承优化二

function Parent() {
  this.parent = 'parent';
  this.arr = [1, 2, 3]
}

Parent.prototype.walk = 'I can walk';

function Child() {
  Parent.call(this);
  this.child = 'child'
}

Child.prototype = Object.create(Parent.prototype); // Object.create() 创建了一个中间对象，起到隔离子类和父类的作用。
Child.prototype.constructor = Child;
const child1 = new Child();
const child2 = new Child();

// 测试
console.log(child1.parent); // parent
console.log(child1.walk);    // I can walk

child1.arr.push(4);
console.log(child1.arr); // [1, 2, 3, 4]
console.log(child2.arr); // [1, 2, 3]

console.log(child1.constructor); // Child

// Object.create() 的作用：Object.create(Parent.prototype) 相当于一个空对象 {}，这个空对象的 proto 等于 Parent.prototype，所以这时候我们修改
// Child.prototype.constructor 实际上是在空对象上加上 constructor 属性。

// 优点：解决了不能判断实例的构造函数是子类还是父类的问题