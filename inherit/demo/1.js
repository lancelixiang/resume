// 基于构造函数的继承

function Parent() {
  this.parent = 'parent';
  this.arr = [1, 2, 3]
}

Parent.prototype.walk = 'I can walk';

function Child() {
  Parent.call(this);
  this.child = 'child'
}

const child1 = new Child();
const child2 = new Child();

// 测试
console.log(child1.parent); // parent
console.log(child1.walk);   // undefined

child1.arr.push(4);
console.log(child1.arr); // [1, 2, 3, 4]
console.log(child2.arr); // [1, 2, 3]


// 优点：构造函数的属性具有唯一性(child1.arr 与 child2.arr)
// 缺点：只能继承父类函数的方法和属性，而不能继承原型对象的方法和属性