"use strict";
const search = (value) => {
    if (value === null) {
        console.log("nothing");
    }
    else {
        console.log("searching ...");
    }
};
search(null);
const speedCheck = (speed) => {
    if (typeof speed === "number") {
        console.log(speed);
    }
    else if (typeof speed === "string") {
        console.log(`Sting speed ${speed}`);
    }
};
speedCheck("10 KMH");
const throwError = (message) => {
    throw new Error(message);
};
// throwError("errrrrrrrrrrroooooooooooooooooorrrrrrrrrrrrr!!!!!!!!!!!!!");
//
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
