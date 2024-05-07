import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { RecipeService } from "./services/recipe.service";
import { ShoppingListService } from "./services/shopping-list.service";

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ]
})
export class CoreModule { }