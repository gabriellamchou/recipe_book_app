import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShopingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./services/recipe-resolver.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { 
                path: '', component: RecipeStartComponent, 
                resolve: [RecipesResolverService]
            },
            { 
                path: 'new', component: RecipeEditComponent, 
                resolve: [RecipesResolverService]
            },
            { 
                path: ':id', component: RecipeDetailComponent, 
                resolve: [RecipesResolverService]
            },
            { 
                path: ':id/edit', component: RecipeEditComponent, 
                resolve: [RecipesResolverService]
            }
        ]
    },
    { path: 'shopping-list', component: ShopingListComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}