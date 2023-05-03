let text: any;

text = "Hello World";

text as string;

function kgToGram(peram: string | number): string | number | undefined {
  if (typeof peram === "string") {
    const value = parseInt(peram) * 1000;
    return `the value is ${value} gm`;
  } else if (typeof peram === "number") {
    const value = peram * 1000;
    return value;
  }
}

const toBeNumber = kgToGram(20) as number;
const toBeString = kgToGram("10") as string;
