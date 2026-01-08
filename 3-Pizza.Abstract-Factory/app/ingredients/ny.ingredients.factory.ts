import { PizzaIngredientFactory, Dough, Sauce, Cheese } from "./ingredient.factory";
import { ThinCrustDough, MarinaraSauce, ReggianoCheese } from "./ingredients";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }
}