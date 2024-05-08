import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShopingListComponent } from "./shopping-list.component";

const routes: Routes = [
  { path: '', component: ShopingListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule { }