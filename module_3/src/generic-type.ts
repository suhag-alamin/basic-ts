// const numberArray: Array<number> = [3, 4, 5];
// const stringArray: Array<string> = ["a", "s"];
// const booleanArray: Array<boolean> = [true, false];

// const user: Array<{
//   name: string;
//   age: number;
// }> = [
//   {
//     name: "Suhag",
//     age: 23,
//   },
// ];

type GenericArray<T> = Array<T>;

const numberArray: GenericArray<number> = [3, 4, 5];
const stringArray: GenericArray<string> = ["a", "s"];
const booleanArray: GenericArray<boolean> = [true, false];

type userType = {
  name: string;
  age: number;
};

const user: GenericArray<userType> = [
  {
    name: "Suhag",
    age: 23,
  },
];

type GenericTuple<X, Y> = [X, Y];

const mixedArray: GenericTuple<number, string> = [2, "s"];

const mixedArray2: GenericTuple<object, boolean> = [{ greet: "Hello" }, false];

interface IUserType {
  name: string;
  age: number;
}

const users: GenericTuple<IUserType, string> = [
  {
    name: "Suhag",
    age: 23,
  },
  "Al Amin",
];
