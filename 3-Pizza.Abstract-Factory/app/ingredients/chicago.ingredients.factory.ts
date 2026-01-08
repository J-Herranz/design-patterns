import { PizzaIngredientFactory, Dough, Sauce, Cheese } from "./ingredient.factory";
import { ThickCrustDough, PlumTomatoSauce, MozzarellaCheese } from "./ingredients";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }
}