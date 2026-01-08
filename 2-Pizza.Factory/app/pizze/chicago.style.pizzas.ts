import { Pizza } from "./pizza";

export class ChicagoStyleMargheritaPizza implements Pizza {
  getName(): string { return "Chicago Margherita Pizza"; }
  prepare(): void { console.log("Preparing Chicago Margherita Pizza"); }
  bake(): void { console.log("Baking Chicago Margherita Pizza"); }
  cut(): void { console.log("Cutting Chicago Margherita Pizza"); }
  box(): void { console.log("Boxing Chicago Margherita Pizza"); }
}

export class ChicagoStylePepperoniPizza implements Pizza {
  getName(): string { return "Chicago Pepperoni Pizza"; }
  prepare(): void { console.log("Preparing Chicago Pepperoni Pizza"); }
  bake(): void { console.log("Baking Chicago Pepperoni Pizza"); }
  cut(): void { console.log("Cutting Chicago Pepperoni Pizza"); }
  box(): void { console.log("Boxing Chicago Pepperoni Pizza"); }
}

export class ChicagoStyleVeggiePizza implements Pizza {
  getName(): string { return "Chicago Veggie Pizza"; }
  prepare(): void { console.log("Preparing Chicago Veggie Pizza"); }
  bake(): void { console.log("Baking Chicago Veggie Pizza"); }
  cut(): void { console.log("Cutting Chicago Veggie Pizza"); }
  box(): void { console.log("Boxing Chicago Veggie Pizza"); }
}
