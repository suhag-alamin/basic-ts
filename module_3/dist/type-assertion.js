"use strict";
let text;
text = "Hello World";
text;
function kgToGram(peram) {
    if (typeof peram === "string") {
        const value = parseInt(peram) * 1000;
        return `the value is ${value} gm`;
    }
    else if (typeof peram === "number") {
        const value = peram * 1000;
        return value;
    }
}
const toBeNumber = kgToGram(20);
const toBeString = kgToGram("10");
