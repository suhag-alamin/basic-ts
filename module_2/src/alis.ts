type BouType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const bou1: BouType = {
  name: "Mokta",
  age: 22,
  profession: "Khay day ghuami",
  address: "Daripaka",
};

const bou2: BouType = {
  name: "Allo",
  profession: "Ghuami r khay day",
  address: "Daripaka",
};

type CourseType = string;
type CourseCompleteType = boolean;

const courseName: CourseType = "Next Level web development";
const isCourseCompleted: CourseCompleteType = false;

type OperationType = (x: number, y: number) => number;

const calculate = (
  num1: number,
  num2: number,
  operation: OperationType
): number => {
  return operation(num1, num2);
};

console.log(calculate(2, 4, (x, y) => x + y));
console.log(calculate(10, 5, (x, y) => x * y));
