// keyof guard
type StingNumberType = string | number;

function add(
  param1: StingNumberType,
  param2: StingNumberType
): StingNumberType {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add(1, 2);
add("1", "2");

// in guard

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};

function checkUser(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `I am special user and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

const user1: NormalUser = {
  name: "Suhag",
};
const user2: AdminUser = {
  name: "Mokta",
  role: "admin",
};

const user = checkUser(user2);
// console.log(user);

// instanceof guard

class Animal2 {
  animalName: string;

  constructor(animalName: string) {
    this.animalName = animalName;
  }

  makeSound() {
    console.log("The animal is making sound");
  }
}

class Dog2 extends Animal2 {
  constructor(animalName: string) {
    super(animalName);
  }
  bearking() {
    console.log("The dog is bearking");
  }
}
class Cat2 extends Animal2 {
  constructor(animalName: string) {
    super(animalName);
  }
  meawing() {
    console.log("The cat is meawing");
  }
}

const animal1 = new Dog2("kotta");
const animal2 = new Cat2("bilay");

function getAnimal(animal: Animal2) {
  if (animal instanceof Dog2) {
    animal.bearking();
  } else if (animal instanceof Cat2) {
    animal.meawing();
  } else {
    animal.makeSound();
  }
}

getAnimal(animal2);
