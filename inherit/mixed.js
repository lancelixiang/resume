function Teacher(name, age) {
  this.name = name;
  this.age = age;
  this.ta = 'ta';
  this.tfn = function () {
    console.log('ftn');
  };
}

Teacher.prototype.sayName = function () {
  console.log('name:' + this.name);
};
Teacher.prototype.sayAge = function () {
  console.log('age:' + this.age);
};

function Student() {
  var args = arguments;
  Teacher.call(this, args[0], args[1]);
  this.sa = 'sa';
  this.sfn = function () {
    console.log('ftn');
  };
}

Student.prototype = new Teacher('lance', 18);

var student1 = new Student('xiaolin', 23);
student1.sayName();
student1.sayAge();
console.log(student1);
// name:xiaolin
// age:23
