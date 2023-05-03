type user = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const userOne: user = {
  name: "judo",
  age: 22,
};
const userTwo: IUser = {
  name: "Mudo",
  age: 22,
};

const userThree: IExtendedUser = {
  name: "Kudu",
  age: 24,
  role: "Unknown",
};

type addNumbers = (num1: number, num2: number) => number;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addTwoNumbers: IAddNumbers = (num1, num2) => num1 + num2;

type numbersArrType = number[];

interface INumbersArr {
  [index: number]: number;
}

const numbers: INumbersArr = [2, 4, 5];
