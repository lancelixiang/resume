function Teacher(name) {
  this.name = name;
}

Teacher.prototype.sayName = function () {
  console.log("name is " + this.name);
};
var teacher1 = new Teacher("xiaoming");
teacher1.sayName();

function Student(name) {
  this.name = name;
}

Student.prototype = new Teacher();
var student1 = new Student("xiaolan");
student1.sayName();
