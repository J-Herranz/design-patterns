import { Pizza } from "./pizza";

export class NapoliStyleMargheritaPizza implements Pizza {
  getName(): string { return "Napoli Margherita Pizza"; }
  prepare(): void { console.log("Preparing Napoli Margherita Pizza"); }
  bake(): void { console.log("Baking Napoli Margherita Pizza"); }
  cut(): void { console.log("Cutting Napoli Margherita Pizza"); }
  box(): void { console.log("Boxing Napoli Margherita Pizza"); }
}

export class NapoliStylePepperoniPizza implements Pizza {
  getName(): string { return "Napoli Pepperoni Pizza"; }
  prepare(): void { console.log("Preparing Napoli Pepperoni Pizza"); }
  bake(): void { console.log("Baking Napoli Pepperoni Pizza"); }
  cut(): void { console.log("Cutting Napoli Pepperoni Pizza"); }
  box(): void { console.log("Boxing Napoli Pepperoni Pizza"); }
}

export class NapoliStyleVeggiePizza implements Pizza {
  getName(): string { return "Napoli Veggie Pizza"; }
  prepare(): void { console.log("Preparing Napoli Veggie Pizza"); }
  bake(): void { console.log("Baking Napoli Veggie Pizza"); }
  cut(): void { console.log("Cutting Napoli Veggie Pizza"); }
  box(): void { console.log("Boxing Napoli Veggie Pizza"); }
}
