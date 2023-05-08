class Animal {
  // name: string;
  // species: string;
  // sound: string;

  // constructor(name: string, species: string, sound: string) {
  //   this.name = name;
  //   this.species = species;
  //   this.sound = sound;
  // }

  // parameter properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Germarn Shepard", "Dog", "Ghew Ghew");
dog.makeSound();

const cat = new Animal("Bilay", "Cat", "Meaw Mewa");
cat.makeSound();
