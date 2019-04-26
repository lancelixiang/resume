// 组合继承优化一

function Parent() {
  this.parent = 'parent';
  this.arr = [1, 2, 3]
}

Parent.prototype.walk = 'I can walk';

function Child() {
  Parent.call(this);
  this.child = 'child'
}

Child.prototype = Parent.prototype;
const child1 = new Child();
const child2 = new Child();

// 测试
console.log(child1.parent); // parent
console.log(child1.walk);    // I can walk

child1.arr.push(4);
console.log(child1.arr); // [1, 2, 3, 4]
console.log(child2.arr); // [1, 2, 3]

console.log(child1.constructor); // Parent

// 优点：解决了调用两次的问题
// 缺点：不能判断实例的构造函数是子类还是父类(此时 child1、child2 的构造函数指向 Parent)