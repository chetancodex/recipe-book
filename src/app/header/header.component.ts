import { Component } from '@angular/core';
import { DataStorageService } from '../shared-models/data-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(private dataStore : DataStorageService){

  }
  onSaveData(){
       this.dataStore.storeRecipes();
  }
  onFetchData(){
    this.dataStore.fetchRecipes().subscribe();
  }

  
}
