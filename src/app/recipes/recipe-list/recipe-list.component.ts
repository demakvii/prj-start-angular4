import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import  {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A Test Recipe','This is first simple detail','../../../../favicon.ico'),
		new Recipe('A Test Recipe 2','This is second simple detail','../../../../favicon.ico'),
		new Recipe('A Test Recipe 3','This is third simple detail','../../../../favicon.ico'),
		new Recipe('A Test Recipe 4','This is fourth simple detail','../../../../favicon.ico')
	];

@Output()	recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){
  	this.recipeWasSelected.emit(recipe);
  }

}
