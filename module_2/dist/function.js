"use strict";
function add(num1, num2 = 20) {
    return num1 + num2;
}
add(2);
const add2 = (num1, num2) => num1 + num2;
const arr = [2, 3, 4, 5];
const newArr = arr.map((element) => element * element);
const person = {
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
const myFriends = ["Masum", "Mizanur", "Afruja"];
const newFriends = ["Mokta", "Allo"];
myFriends.push(...newFriends);
// console.log(myFriends);
// rest perameter
const greetFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("Masum", "Mizanur", "Afruja", "Mokta");
// destructuring
const [bestFriend] = myFriends;
const bou = {
    bouName: "Mokta",
    age: 22,
};
const { bouName } = bou;
console.log(bouName);
