import { PizzaStore } from "./pizza.store";
import { Pizza } from "../pizze/pizza";
import { CheesePizza } from "../pizze/cheese.pizza";
import { ChicagoPizzaIngredientFactory } from "../ingredients/chicago.ingredients.factory";

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (type === "cheese") {
      const pizza = new CheesePizza(ingredientFactory);
      pizza["name"] = "Chicago Style Cheese Pizza";
      return pizza;
    }

    throw new Error("Tipo de pizza no reconocido");
  }
}