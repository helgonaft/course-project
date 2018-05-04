import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // new type Recipe for a model Recipe
  // Recipe[] - array of Recipe objects
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a simple test recipe', 'http://fb.ru/misc/i/gallery/11333/1235080.jpg'),
    new Recipe('Pizza', 'Italian food', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
