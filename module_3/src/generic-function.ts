const createArr = <T>(param: T): T[] => {
  return [param];
};

createArr<string>("Hello World");
createArr<number>(2);
createArr<boolean>(true);

const createArr2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
function createArr3<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

createArr2<string, number>("Hello World", 13);

interface IUser {
  name: string;
  age: number;
}

// createArr2<IUser, [string]>({
//   name: "Suhag",
//   age:23
// }, ["Suhag"])
createArr2<IUser, Array<string>>(
  {
    name: "Suhag",
    age: 23,
  },
  ["Suhag"]
);

// spread operator

const addMeIntoMyCrush = <T>(myInfo: T) => {
  const myCrush = "Emma Watson";
  const newData = { ...myInfo, myCrush };
  return newData;
};

const myInfo = {
  name: "Suhag",
  age: 23,
  salary: 100,
};

const result3 = addMeIntoMyCrush(myInfo);

result3.age;

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users4 = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

// console.log(getArrayItem(users4, 0, "name"));

interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}
console.log(
  fullName({
    firstName: "Suhag",
    lastName: "Al Amin",
  })
);
