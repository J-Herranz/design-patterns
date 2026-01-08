import { PizzaStore } from "./pizza.store";
import { Pizza } from "../pizze/pizza";
import { CheesePizza } from "../pizze/cheese.pizza";
import { NYPizzaIngredientFactory } from "../ingredients/ny.ingredients.factory";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    const ingredientFactory = new NYPizzaIngredientFactory();

    if (type === "cheese") {
      const pizza = new CheesePizza(ingredientFactory);
      pizza["name"] = "New York Style Cheese Pizza";
      return pizza;
    }

    throw new Error("Tipo de pizza no reconocido");
  }
}