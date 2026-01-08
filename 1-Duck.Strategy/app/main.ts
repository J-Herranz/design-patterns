import { Mallard, RubberDuck } from "./concrete.ducks";
import { FlyWithWings, FlyNoWay } from "./fly.behaviour";

function main() {
  console.log("Duck Simulation");

  const mallard = new Mallard();
  mallard.display();
  mallard.swim();
  mallard.performQuack();
  mallard.performFly();

  console.log("---");

  const rubber = new RubberDuck();
  rubber.display();
  rubber.swim();
  rubber.performQuack();
  rubber.performFly();

  console.log("---");

  // Cambiar comportamiento en tiempo de ejecución
  console.log("Changing RubberDuck to fly with wings...");
  rubber.setFlyBehavior(new FlyWithWings());
  rubber.performFly();
}

main();