import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";

import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    recipesUrl: string = 'https://ng-course-recipe-book-7117f-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

    constructor(private http: HttpClient,
                private recipeService: RecipeService
    ){}

    storeRecipes() {
        /**
         * Almacenamos nuestras recetas en recipes
         */
        const recipes = this.recipeService.getRecipes();
        /**
         * Llamamos al servidor con put, que sobreescribe los datos
         * almacenados
         */
        this.http
            .put(
                this.recipesUrl,
                recipes
            )
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    }

    fetchRecipes() {
        /**
         * Llamamos al servidor con get
         */
        return this.http
            /**
             * Tenemos que especificar aquí el type de la respuesta
             */
            .get<Recipe[]>(
                this.recipesUrl
            )
            .pipe(
                /**
                 * Usamos map (rxjs) para modificar la respuesta que recibimos
                 */
                map(
                    recipes => {
                        /**
                         * Recorremos el array recibido en la respuesta con map (js)
                         */
                        return recipes.map(
                            recipe => {
                                return {
                                    ...recipe,
                                    /**
                                     * Si la recipe tiene la propiedad 'ingredients', no hacemos nada
                                     * Si no la tiene, le asignamos un array vacío
                                     */ 
                                    ingredients: recipe.ingredients ? recipe.ingredients : []
                                }
                            }
                        )
                    }
                ),
                /**
                 * Nos suscribiremos en el header.component.ts, por lo que no
                 * podemos suscribirnos aquí también. Para actualizar la lista
                 * de recetas, usamos el setRecipes con un tap
                 */
                tap(
                    recipes => {
                        this.recipeService.setRecipes(recipes);
                    }
                )
            )
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
}
