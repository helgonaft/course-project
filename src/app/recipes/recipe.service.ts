import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a simple test recipe', 'http://fb.ru/misc/i/gallery/11333/1235080.jpg'),
    new Recipe('Pizza', 'Italian food', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];

  getRecipes() {
    // used slice to create a copy of recipes array to avoid changing of initial array
    return this.recipes.slice();
  }
}
