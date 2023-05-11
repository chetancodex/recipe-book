import { Ingredient } from '../shared-models/ingredient-model'
import { Subject } from 'rxjs'
export class ShoppingService {
    latestIngredient = new Subject<Ingredient[]>();
    startingEdit = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Kiwi',30),
        new Ingredient('Pomogrenate',70),
      ];

     getIngredients(){
       return this.ingredients.slice();
     }


      addIng(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.latestIngredient.next(this.ingredients.slice())
      }
      constructor(){ }
     addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.latestIngredient.next(this.ingredients.slice())
     }

     getIngredient(index: number){
        return this.ingredients[index];
     }
    updateIngredient(index: number, newIngredient : Ingredient) {
       this.ingredients[index] = newIngredient;
       this.latestIngredient.next(this.ingredients.slice())
    }
    deleteIng(index : number) {
      this.ingredients.splice(index, 1)
      this.latestIngredient.next(this.ingredients.slice());
    }

}