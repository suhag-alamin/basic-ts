type a1 = number;

type b = a1 extends string ? string : null;

type Sheikh = {
  wife1: string;
  wife2: string;
};

// type CheckProperty<T> = T extends {wife1: string} ? true : false;
type CheckProperty<T, K> = K extends keyof T ? true : false;

type CheckWife = CheckProperty<Sheikh, "wife1">;

type Bandubi = "Mokta" | "Afruja" | "Sumi";

type RemoveBandubi<T, K> = T extends K ? never : T;

type CurrentBandubi = RemoveBandubi<Bandubi, "Mokta">;
