import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";

    this.recipeForm = this.fb.group({
      'name': recipeName,
      'imagePath': recipeImagePath,
      'description': recipeDescription,
      'ingredients': this.fb.array([])
    });

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.image;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          const formIngredients = this.fb.group({
            'name' : ingredient.name,
            'amount': ingredient.amount
          })
          this.recipeIngredients.push(formIngredients);
        }
      }
    }
    
    this.recipeForm = this.fb.group({
      'name': recipeName,
      'imagePath': recipeImagePath,
      'description': recipeDescription,
      'ingredients': this.recipeIngredients
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  get recipeIngredients() {
    return this.recipeForm.controls['ingredients'] as FormArray;
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
