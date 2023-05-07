type AreaNumber = {
  width: number;
  height: number;
};
type AreaSting = {
  width: string;
  height: string;
};

type AreaReadOnly = {
  readonly width: number;
  readonly height: number;
};

const area: AreaReadOnly = {
  width: 20,
  height: 20,
};

// const obj = {
//   name: "suhag",
// };
// obj[name];

type a = AreaNumber["height"]; // look up typee
type b2 = keyof AreaNumber;

type Volume = {
  width: number;
  height: number;
  depth: number;
};

type Area<T> = {
  //   [key in keyof Volume]: number;
  //   [key in keyof Volume]: Volume[key];
  [key in keyof T]: T[key];
};

const area1: Area<{ width: number; height: number }> = {
  height: 20,
  width: 20,
};
