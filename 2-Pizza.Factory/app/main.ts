import { ChicagoPizzaStore, NapoliPizzaStore } from "app/stores/regional.pizza.stores";

function main() {
  const napoliStore = new NapoliPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  const pizza1 = napoliStore.orderPizza("margherita");
  console.log(`Pedido: ${pizza1.getName()}`);

  const pizza2 = napoliStore.orderPizza("pepperoni");
  console.log(`Pedido: ${pizza2.getName()}`);

  const pizza3 = chicagoStore.orderPizza("veggie");
  console.log(`Pedido: ${pizza3.getName()}`);
}

main();
