import { NYPizzaStore } from "./stores/ny.pizza.store";
import { ChicagoPizzaStore } from "./stores/chicago.pizza.store";

function main() {
  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  const pizza1 = nyStore.orderPizza("cheese");
  console.log(`Pedido completado: ${pizza1.getName()}\n`);

  const pizza2 = chicagoStore.orderPizza("cheese");
  console.log(`Pedido completado: ${pizza2.getName()}\n`);
}

main();
