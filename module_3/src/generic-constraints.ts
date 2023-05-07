interface IMyInfo {
  name: string;
  age: number;
  salary: number;
}

const addMeIntoMyCrush2 = <T extends IMyInfo>(myInfo: T) => {
  const myCrush = "Emma Watson";
  const newValue = { ...myInfo, myCrush };
  return newValue;
};

const myInfo2 = {
  name: "Suhag",
  age: 23,
  salary: 100,
  isMarried: false,
};

const result4 = addMeIntoMyCrush2(myInfo2);
