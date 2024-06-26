import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  private subscription!: Subscription;

  constructor(private slService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

}
