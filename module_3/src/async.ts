// mocking

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fecthed";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = makePromise();
  return data;
};

interface IData {
  data: string;
}

const makePromiseObject = (): Promise<IData> => {
  return new Promise<IData>((resolve, reject) => {
    const data: IData = {
      data: "Data is fetched",
    };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseDataObject = async (): Promise<IData> => {
  const data = makePromiseObject();
  return data;
};

// json placeholder api

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
};
