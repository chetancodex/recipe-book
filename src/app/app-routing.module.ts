import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-details/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver-service';

const routes: Routes = [
  {  path : "", redirectTo: "/recipes",pathMatch:'full' },
  {  path : "recipes", component: RecipesComponent, children : [
    { path: "", component: RecipeStartComponent},
    {path: "new-recipe", component:RecipeEditComponent },
    {path: ":id", component:RecipeDetailsComponent, resolve: [RecipeResolverService]},
    {path: ":id/edit", component:RecipeEditComponent, resolve: [RecipeResolverService]} 
]},
  {  path : "shoppingList", component: ShoppingListComponent}];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
