let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: {} = {
  x: 10,
  y: 20,
};

let secondPoint: { x: number; y: number } = {
  x: 20,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotation
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{x:10, y:20};

// Avoiding any
const json2 = '{"x": 10, "y": 20}';
const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2);

// 2) When we cdeclare a variable on one line
// and initialize it later
// Delayed Initialization
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// Functions
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// Anonymous Functions
function devide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void
const logger = (message: string): void => {
  console.log(message);
};

// Never => technically not returning anything and it won't reach the end of the statement
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring & Annotations
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// Object annotations
const profile = {
  myname: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, myname }: { age: number; myname: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(age);
console.log(myname);
console.log(lat);
console.log(lng);

// Arrays
const carMarkers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [];

// Help with inference when extracting values
const car2 = carMarkers[0];
const myCar = carMarkers.pop();

// Prevent incompatible values
// carMarkers.push(100); => Error

// Help with 'map'
carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
const importantDates: (string | Date)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
