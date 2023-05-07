interface ICrush<T, U = null> {
  name: string;
  husband: T;
  friend?: U;
}

const crush1: ICrush<boolean> = {
  name: "Allo",
  husband: false,
};
const crush2: ICrush<string> = {
  name: "Allo",
  husband: "Al Amin",
};

interface IHusband {
  name: string;
  age: number;
}

const crush3: ICrush<IHusband> = {
  name: "Mokta",
  husband: {
    name: "Suhag",
    age: 23,
  },
};

interface IPerson {
  name: string;
  age: number;
}

const crush4: ICrush<IPerson, IPerson> = {
  name: "Mokta Allo",
  husband: {
    name: "Suhag",
    age: 23,
  },
  friend: {
    name: "Puja",
    age: 21,
  },
};
