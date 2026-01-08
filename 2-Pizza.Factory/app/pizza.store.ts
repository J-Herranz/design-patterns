import { Pizza } from "app/pizze/pizza";

export abstract class PizzaStore {
  // Método que define el flujo general
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type); // delega la creación concreta
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  // Método abstracto que cada franquicia implementará
  protected abstract createPizza(type: string): Pizza;
}