import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap, take, exhaustMap } from "rxjs";

import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    recipesUrl: string = 'https://ng-course-recipe-book-7117f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        this.http
            .put(
                this.recipesUrl,
                recipes
            )
            .subscribe(response => {
                console.log(response);
            })
    }

    pruebaGet() {
        return this.http
            .get(
                `${environment.apiUrl}prueba-get`
            )
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>(
                this.recipesUrl
            ).pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
    }

    /**
     * Nos suscribimos al get para sobreescribir la propiedad recipes de
     * nuestro recipeService, y que así se muestre la lista de recetas
     * que tenemos en bd
     */
    // .subscribe(
    //     (recipes: Recipe[]) => {
    //         this.recipeService.setRecipes(recipes);
    //     }
    // );


}
