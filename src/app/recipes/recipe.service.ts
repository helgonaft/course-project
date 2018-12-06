import {Recipe} from './recipe.model';

export class RecipeService {
  private  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a simple test recipe', 'http://fb.ru/misc/i/gallery/11333/1235080.jpg'),
    new Recipe('Pizza', 'Italian food', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
