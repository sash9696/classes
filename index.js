// CLASS -> OBJECT

// ENCAPSULATION ABSTRACTION INHERITANCE POLYMORPHISM

// INSTANCE PROPERTIES -> WHAT THEY HAVE

// -NAME
// -AGE
// -HEIGHT

// INSTANCE METHODS -> WHAT THEY DO

// TALK
// WALK
// JUMP

// class Rectangle {
//   //setup of the class
//   constructor(width, height, color) {
//     console.log("THe Rectangle is created");
//     //instance properties

//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
//   //instance methods

//   // getArea() {
//   //   return this.width * this.height;
//   // }
//   getArea = () => {
//     return this.width * this.height;
//   };
//   getDescription() {
//     console.log(
//       `I am a rectangle of ${this.width} x ${this.height} of ${this.color}`
//     );
//   }
// }
// //instatiation of class
// let rectangle1 = new Rectangle(3, 5, "red");
// let rectangle2 = new Rectangle(10, 3, "blue");

//getters and setters

// class Square {
//   constructor(_width) {
//     //instance properties
//     this.width = _width;
//     this.height = _width;
//   }
//   //instance methods

//   get area() {
//     return this.width * this.height;
//   }

//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }

// let square1 = new Square(4);
// square1.area = 25;
// console.log(square1.height);

//static methods

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }

//   static equals(area1, area2) {
//     return area1.width * area1.height === area2.width * area2.height;
//   }
// }

// let square1 = new Square(10);
// let square2 = new Square(10);

// console.log(Square.equals(square1, square2));

//Inheritance

//Parent and Child Class

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   describePerson() {
//     console.log(`I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// class Programmer extends Person {
//   constructor(_name, _age, _yearsOfExperience) {
//     super(_name, _age);

//     //custom properties and methods
//     this.yearsOfExperience = _yearsOfExperience;
//   }

//   code() {
//     console.log(`${this.name} is coding`);
//   }
// }
// let person1 = new Person("John", 30);
// let programmer1 = new Programmer("Tom", 40, 10);

//Classes : Polymorphism

class Animal {
  constructor(name) {
    this.name = name;
  }

  createSound() {
    console.log("General Sound");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  createSound() {
    console.log("Woof Woof");
  }
}

const a1 = new Animal("Tom");
const a2 = new Dog("jerry");

a1.createSound();
a2.createSound();
