type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

const newDevlopre: NoobDeveloper | JuniorDeveloper = {
  name: "Mokta",
  experience: 1,
};

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipEx: number;
  level: string;
};

const developer: NextLevelDeveloper = {
  name: "Mokta",
  leaderShipEx: 2,
  expertise: "TS",
  experience: 2,
  level: "Mid",
};
