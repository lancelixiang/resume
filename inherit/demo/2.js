//基于原型链的继承

function Parent() {
  this.parent = 'parent';
  this.arr = [1, 2, 3]
}

Parent.prototype.walk = 'I can walk';

function Child() {
  this.child = 'child'
}

Child.prototype = new Parent();
const child1 = new Child();
const child2 = new Child();

// 测试
console.log(child1.parent); // parent
console.log(child1.walk);    // I can walk

child1.arr.push(4);
console.log(child1.arr); // [1, 2, 3, 4]
console.log(child2.arr); // [1, 2, 3, 4]

// 优点：继承父类函数的方法和属性同时继承了原型对象的方法和属性
// 缺点：当在一个子类的实例上修改父类的属性和方法时，其它的子类也会受到影响(相当于改变了子类原型链上的属性
// 优点：可以少写一个构造函数
// 缺点：同上述基于原型链继承的缺点