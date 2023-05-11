import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared-models/ingredient-model'
import { ShoppingService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients!: Ingredient[];
  igSubChanged!: Subscription
  constructor(private shoppingService: ShoppingService){
  }

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
   this.igSubChanged = this.shoppingService.latestIngredient.subscribe((ingredient: Ingredient[])=>{
        this.ingredients = ingredient
    })
  }
  ngOnDestroy() {
    this.igSubChanged.unsubscribe();
  }
  onEditItem(index : number) {
    this.shoppingService.startingEdit.next(index)
  }
}

