function Person() {
  // this.name = name;
}

var person1 = new Person();
console.log(person1 instanceof Person); //true

function SpecialArray() {
  //创建数组
  // return new Array();
}

var colors = new SpecialArray();

console.log(colors instanceof SpecialArray);
