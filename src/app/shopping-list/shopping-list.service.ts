import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingerdientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    // create 1st ingredient using constructor from Ingredient model
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }
}
