// Interfaces base para las familias de productos
export interface Dough {}
export interface Sauce {}
export interface Cheese {}

// Interfaz de fábrica abstracta
export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
}