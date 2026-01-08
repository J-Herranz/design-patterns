import { PizzaStore } from "app/pizza.store";
import { Pizza } from "app/pizze/pizza";
import { NapoliStyleMargheritaPizza, NapoliStylePepperoniPizza, NapoliStyleVeggiePizza } from "app/pizze/napoli.style.pizzas";
import { ChicagoStyleMargheritaPizza, ChicagoStylePepperoniPizza, ChicagoStyleVeggiePizza } from "app/pizze/chicago.style.pizzas";

export class NapoliPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === "margherita") return new NapoliStyleMargheritaPizza();
    if (type === "pepperoni") return new NapoliStylePepperoniPizza();
    if (type === "veggie") return new NapoliStyleVeggiePizza();
    throw new Error("Tipo de pizza desconocido");
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === "margherita") return new ChicagoStyleMargheritaPizza();
    if (type === "pepperoni") return new ChicagoStylePepperoniPizza();
    if (type === "veggie") return new ChicagoStyleVeggiePizza();
    throw new Error("Tipo de pizza desconocido");
  }
}
