import { FlyBehaviour } from "./fly.behaviour";
import { QuackBehaviour } from "./quack.behaviour";

export abstract class Duck {
  // Comportamientos variables
  protected flyBehaviour!: FlyBehaviour;
  protected quackBehaviour!: QuackBehaviour;

  swim(): void {
    console.log("Swimming!");
  }

  performFly(): void {
    this.flyBehaviour.fly();
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }

  setFlyBehavior(fb: FlyBehaviour) {
    this.flyBehaviour = fb;
  }

  setQuackBehavior(qb: QuackBehaviour) {
    this.quackBehaviour = qb;
  }

  abstract display(): void;
}