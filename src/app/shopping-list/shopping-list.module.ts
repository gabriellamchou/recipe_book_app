import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ShopingListEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShopingListComponent } from "./shopping-list.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingListEditComponent,
  ],
  imports: [
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ]
})
export class ShoppingListModule { }