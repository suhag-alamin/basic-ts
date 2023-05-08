class Person2 {
  takeNap(): void {
    console.log("I am sleeping 8 hours per day.");
  }
}

class Student2 extends Person2 {
  takeNap(): void {
    console.log("I am sleeping 10 hours per day.");
  }
}

class Developer extends Person2 {
  takeNap(): void {
    console.log("I am sleeping 5 hours per day");
  }
}

function getNap(param: Person2) {
  param.takeNap();
}

const person1 = new Person2();
const person2 = new Student2();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape): void {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(5));
getAreaOfShape(new Rectangle(10, 20));
