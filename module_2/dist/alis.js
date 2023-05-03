"use strict";
const bou1 = {
    name: "Mokta",
    age: 22,
    profession: "Khay day ghuami",
    address: "Daripaka",
};
const bou2 = {
    name: "Allo",
    profession: "Ghuami r khay day",
    address: "Daripaka",
};
const courseName = "Next Level web development";
const isCourseCompleted = false;
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
console.log(calculate(2, 4, (x, y) => x + y));
console.log(calculate(10, 5, (x, y) => x * y));
