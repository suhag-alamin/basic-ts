const search = (value: string | null): void => {
  if (value === null) {
    console.log("nothing");
  } else {
    console.log("searching ...");
  }
};

search(null);

const speedCheck = (speed: unknown) => {
  if (typeof speed === "number") {
    console.log(speed);
  } else if (typeof speed === "string") {
    console.log(`Sting speed ${speed}`);
  }
};

speedCheck("10 KMH");

const throwError = (message: string): never => {
  throw new Error(message);
};

// throwError("errrrrrrrrrrroooooooooooooooooorrrrrrrrrrrrr!!!!!!!!!!!!!");

//

// function generateAdder(a: number): (b: number) => number {
//   return function (b: number) {
//     return a + b;
//   };
// }

// const addTwo = generateAdder(2);

// console.log(addTwo(3));

// console.log(addTwo(5));

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);
console.log(addTwo(3));

console.log(addTwo(5));
