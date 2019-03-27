function Person(name, age) {
  this.name = name;
  this.age = age;
  this.show = function () {
    console.log(this.name + ", " + this.age);
  }
}

function Student(name, age) {
  this.student = Person; //将Person类的构造函数赋值给this.Student
  this.student(name, age); //js中实际上是通过对象冒充来实现继承的
  // delete this.student; //移除对Person的引用
}

var s = new Student("小明", 17);
s.show();

var p = new Person("小花", 18);
p.show();
// 小明, 17
// 小花, 18
