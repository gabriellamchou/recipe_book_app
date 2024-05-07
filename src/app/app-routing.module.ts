import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShopingListComponent } from "./shopping-list/shopping-list.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShopingListComponent },
    { path: 'auth', component: AuthComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}