import { Dough, Sauce, Cheese } from "./ingredient.factory";

// Ingredientes de New York
export class ThinCrustDough implements Dough {}
export class MarinaraSauce implements Sauce {}
export class ReggianoCheese implements Cheese {}

// Ingredientes de Chicago
export class ThickCrustDough implements Dough {}
export class PlumTomatoSauce implements Sauce {}
export class MozzarellaCheese implements Cheese {}