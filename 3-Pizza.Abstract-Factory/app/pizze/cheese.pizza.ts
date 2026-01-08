import { Pizza } from "./pizza";
import { PizzaIngredientFactory } from "../ingredients/ingredient.factory";

export class CheesePizza extends Pizza {
  constructor(private ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = "Cheese Pizza";
  }

  prepare(): void {
    console.log(`Preparando ${this.name}...`);
    const dough = this.ingredientFactory.createDough();
    const sauce = this.ingredientFactory.createSauce();
    const cheese = this.ingredientFactory.createCheese();

    console.log(
      `Usando: ${dough.constructor.name}, ${sauce.constructor.name}, ${cheese.constructor.name}`
    );
  }
}