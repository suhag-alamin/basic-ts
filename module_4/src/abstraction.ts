// interface
// interface IVhicle {
//     name: string
//     model: string
// }

// const vhicle: IVhicle = {
//     name: 'Car',
//     model: '2022'
// }

//! Abstract interface

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("starting engine");
  }
  stopEngine(): void {
    console.log("stoping engine");
  }
  move(): void {
    console.log("moving the car");
  }
  test() {
    console.log("this is test");
  }
}

const vehicle1 = new Vehicle("Car", "BMW", 2023);

// ! abstract class

abstract class Vehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("moving the car");
  }
}

// const newCar = new Vehicle2('Car', 'MS', 2034)

class Car extends Vehicle2 {
  startEngine(): void {
    console.log("starting");
  }
  stopEngine(): void {
    console.log("stopping");
  }
}
