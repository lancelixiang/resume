// 组合继承

function Parent() {
  this.parent = 'parent';
  this.arr = [1, 2, 3]
}

Parent.prototype.walk = 'I can walk';

function Child() {
  Parent.call(this);  // 这里执行第一次父类
  this.child = 'child'
}

// 这里执行第二次父类，原型继承发现只要把父子的原型对象绑定起来就好，
// 可以写成 Child.prototype = new Parent3().__proto__ 也正常
Child.prototype = new Parent();
const child1 = new Child();
const child2 = new Child();

// 测试
console.log(child1.parent); // parent
console.log(child1.walk);    // I can walk

child1.arr.push(4);
console.log(child1.arr); // [1, 2, 3, 4]
console.log(child2.arr); // [1, 2, 3]

// 优点：结合了构造函数继承和原型链继承的优点
// 缺点：父类方法调用了两次，而且不能判断实例的构造函数是子类还是父类