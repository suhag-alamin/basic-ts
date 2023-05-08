// <<------------------------- problem - 1 -------------------->>
const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

// <<----------------------- problem - 2 ---------------------->>

type numberArr = number[];
const compareArr = (arr1: numberArr, arr2: numberArr): numberArr => {
  const newArr: numberArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
};

const arr1: numberArr = [1, 2, 3, 4, 5, 6, 9];
const arr2: numberArr = [2, 4, 6, 8, 0, 9];

const resultArr = compareArr(arr1, arr2);
// console.log(resultArr);

// <<----------------------- problem - 3 ---------------------->>

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

const filterProduct = <T extends keyof IProduct>(
  products: IProduct[],
  criterion: T,
  value: IProduct[T]
): IProduct[] => {
  return products.filter((product) => product[criterion] === value);
};

const products: IProduct[] = [
  { id: 1, name: "Product 1", price: 10.99, category: "Category A" },
  { id: 2, name: "Product 2", price: 20.99, category: "Category B" },
  { id: 3, name: "Product 3", price: 30.99, category: "Category A" },
  { id: 4, name: "Product 4", price: 40.99, category: "Category B" },
];

const filteredProduct = filterProduct(products, "category", "Category A");
// console.log(filterProduct);

// <<----------------------- problem - 4 ---------------------->>

type ProductTuple = [string, number, number];

const calculateTotalCost = (products: ProductTuple[]): number => {
  let totalCost = 0;
  for (const [name, price, quantity] of products) {
    totalCost += price * quantity;
  }
  return totalCost;
};

const products2: ProductTuple[] = [
  ["product1", 10, 2],
  ["product2", 20, 3],
];

const totalCost = calculateTotalCost(products2);

console.log(totalCost);
// <<----------------------- problem - 5 ---------------------->>

const findEvenSum = (arr: numberArr): number => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sum += element;
    }
  }

  return sum;
};

const arr3: numberArr = [1, 2, 3, 4, 5, 6, 9, 10];

const resultOfEvenSum = findEvenSum(arr3);

// console.log(resultOfEvenSum);

// <<----------------------- problem - 6 ---------------------->>

interface IPerson {
  name: string;
  age: number;
  email: string;
}

const personsArray: Array<IPerson> = [
  {
    name: "Suhag",
    age: 23,
    email: "suhag@gmail.com",
  },
  {
    name: "Al Amin",
    age: 24,
    email: "alamin@gmail.com",
  },
  {
    name: "Mokta",
    age: 21,
    email: "mokta@gmail.com",
  },
];

const checkPerson = (
  personArr: Array<IPerson>,
  email: string
): IPerson | null => {
  for (let i = 0; i < personArr.length; i++) {
    const person = personArr[i];
    if (person.email === email) {
      return person;
    }
  }
  return null;
};

// console.log(checkPerson(personsArray, "mokta@gmail.com"));

// <<----------------------- problem - 7 ---------------------->>

const findMinMax = (...arr: number[]): void => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log(`Minimum value is ${min} and maximum value is ${max}`);
};

const numbers: number[] = [2, 4, 5, 6, 9];
findMinMax(...numbers);
// <<----------------------- problem - 8 ---------------------->>

type ColorType = "red" | "green" | "blue";

const logString = (color: ColorType, isUpperCase?: boolean): void => {
  if (isUpperCase) {
    console.log(color.toUpperCase());
  } else {
    console.log(color.toLowerCase());
  }
};

// logString("blue", true);
