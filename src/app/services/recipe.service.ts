import { Injectable } from "@angular/core";

import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            "Caldo Gallego", 
            "El caldo gallego es uno de los platos más conocidos de la gastronomía galaica. Se trata de un potaje resultado de cocer grelos o nabizas (la hoja del nabo), alubias y patatas en una olla, a veces con algo de carne.", 
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Caldo_galego%2C_Galiza.jpg",
            [
                new Ingredient('Patata', 4),
                new Ingredient('Lacón', 1),
                new Ingredient('Agua', 5),
                new Ingredient('Grelos', 2),
            ]),
        new Recipe("Cocido Madrileño", 
            "El cocido madrileño es uno de los platos más representativos de la cocina de Madrid.1​ Consiste en un guiso cuyo ingrediente principal son los garbanzos y los secundarios, aunque con gran protagonismo, diversas verduras, carnes y tocino de cerdo con algún embutido.", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/CocidoMadrile%C3%B1o.jpg/1280px-CocidoMadrile%C3%B1o.jpg",
            [
                new Ingredient('Patata', 4),
                new Ingredient('Pollo', 1),
                new Ingredient('Agua', 5),
                new Ingredient('Chorizo', 2),
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        /**
         * Con slice devolvemos una copia del array, no el array en sí
         * Con esto nos aseguramos de que el array real no sea alterado
         */
        return this.recipes.slice();
    }

    getRecipeById(id: number): Recipe {
        return this.recipes[id]!;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}