import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RecipesProvider Provider');
  }

  GetRecipes():Observable<any>{
    return this.http.get("https://www.food2fork.com/api/search?key=chicken");
  }
  //http://www.omdbapi.com/?apikey=7aa21a29&s=war
  //"http://www.recipepuppy.com/api/?i=onions");
}
