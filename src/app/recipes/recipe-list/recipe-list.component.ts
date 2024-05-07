import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  subscription = new Subscription();

  constructor(private recipeService: RecipeService,
              private router: Router,
              private dataStorage: DataStorageService
  ) { }
  
  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
    this.dataStorage.pruebaGet().subscribe((response) => {
      console.log(response);
      
    })
    
  }

  onNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
