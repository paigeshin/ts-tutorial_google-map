// Tuples in Typescript
/*
Array-like structure when each element represents some property of a record 
Ordering is really important here

Object representing a 'drink'

color -> brown
carbonated -> true 
sugar -> 40 

*/

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// how to define tuples
const pepsi: [string, boolean, number] = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// Why tuples?
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsePower: 400,
  weight: 3354,
};
