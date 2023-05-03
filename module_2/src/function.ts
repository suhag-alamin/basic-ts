function add(num1: number, num2: number = 20): number {
  return num1 + num2;
}

add(2);

const add2 = (num1: number, num2: number): number => num1 + num2;

const arr: number[] = [2, 3, 4, 5];

const newArr: number[] = arr.map((element: number) => element * element);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
  cutBalance(money: number): string;
} = {
  name: "Suhag",
  balance: 5,
  addBalance(money) {
    return this.balance + money;
  },
  cutBalance(money) {
    return `New balance ${this.balance - money}`;
  },
};

// spread operator

const myFriends: string[] = ["Masum", "Mizanur", "Afruja"];

const newFriends: string[] = ["Mokta", "Allo"];

myFriends.push(...newFriends);

// console.log(myFriends);

// rest perameter

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("Masum", "Mizanur", "Afruja", "Mokta");

// destructuring
const [bestFriend] = myFriends;

const bou = {
  bouName: "Mokta",
  age: 22,
};

const { bouName } = bou;

console.log(bouName);
