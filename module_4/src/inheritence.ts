class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `${this.name} sleeps ${hours} a day.`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClasses(numOfClass: number): string {
    return `The ${this.designation} teacher takes ${numOfClass} everyday.`;
  }
}

const student1 = new Student("Suhag", 23, "tangail");
student1.makeSleep(6);

const teacher = new Teacher("Al amin", 24, "Sakhipur", "Programming Teacher");
teacher.takeClasses(3);
