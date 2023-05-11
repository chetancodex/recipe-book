import { Ingredient } from '../shared-models/ingredient-model';
import { Recipe } from './recipe-model'
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable()
export class RecipeService{
  recipeChanges = new Subject<Recipe[]>();
   private recipes: Recipe[] = [
        new Recipe('Southern Dosa',
        'Elegent and digestable Meal',
        'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
        [
          new Ingredient('mutton',1)
         ]),
        new Recipe('Palak Panner',
        'Down To Earth Meal',
        'https://thumbs.dreamstime.com/b/palak-paneer-spinach-cottage-cheese-curry-mortar-spices-dark-background-traditional-indian-dish-top-view-copy-145875952.jpg',
        [
          new Ingredient('panner',30)
        ]),
        new Recipe('Tandoori Momos',
        'Spicy And Grilled Tandoori Momos for Fast Fooder',
        'https://thumbs.dreamstime.com/z/tandoori-momo-momos-fusion-indian-chinese-food-dimsums-tossed-paste-chargrilled-to-perfection-serve-230691899.jpg',
        [
          new Ingredient ('rice',40),
          new Ingredient ('popcorn', 20)
        ])
      ];
      constructor(private shoppingService: ShoppingService){}
  
      getRecipes() {
        return this.recipes.slice();
      }
      getRecipe(id:number){
         return this.recipes[id];
      }
      AddIngredientToShoppingList(ingredient:Ingredient[]){
           this.shoppingService.addIngredients(ingredient)
      }
      AddRecipe(recipe : Recipe){
       this.recipes.push(recipe);
       this.recipeChanges.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipeChanges.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipeChanges.next(this.recipes.slice());
      }
      setRecipes(recipes : Recipe[]){
          this.recipes = recipes;
          this.recipeChanges.next(this.recipes.slice()) 
      }
}