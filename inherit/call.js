function Teacher(name, age) {
  // this.name = name;
  // this.age = age;
  this.sayHi = function () {
    console.log('name:' + name + ", age:" + age);
  }
}

function Student() {
  var args = arguments;
  Teacher.call(this, args[0], args[1]);
// Teacher.apply(this,arguments);
}

var teacher1 = new Teacher('xiaoming', 23);
teacher1.sayHi();

var student1 = new Student('xiaolan', 12);
student1.sayHi();

// alert: name:xiaoming, age:23
// alert: name:xiaolan, age:12
