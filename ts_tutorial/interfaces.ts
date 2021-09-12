// Interfaces + Classes => How we get really strong code reuse in TS
// Interfaces => Creates a new type, describing the property names and value types of an object

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

// Long Type Annotations
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

const newDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printSummary(newDrink);
