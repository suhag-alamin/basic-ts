"use strict";
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
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Germarn Shepard", "Dog", "Ghew Ghew");
dog.makeSound();
const cat = new Animal("Bilay", "Cat", "Meaw Mewa");
cat.makeSound();
