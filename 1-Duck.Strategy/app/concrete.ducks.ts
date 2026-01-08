import { Duck } from "./Duck";
import { FlyWithWings, FlyNoWay } from "./fly.behaviour";
import { Quack, Squeak } from "./quack.behaviour";

export class Mallard extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  display(): void {
    console.log("I'm a mallard duck!");
  }
}

export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay(); // no puede volar
    this.quackBehaviour = new Squeak(); // hace squeak
  }

  display(): void {
    console.log("I'm a rubber duck!");
  }
}