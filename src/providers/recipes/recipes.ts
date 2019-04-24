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
//the recipe api
  GetRecipes():Observable<any>{
    return this.http.get("http://www.omdbapi.com/?apikey=7aa21a29&s=food");
  }
  //all the different apis i tried to use but none worked
  //http://www.omdbapi.com/?apikey=7aa21a29&s=war
  //"http://www.recipepuppy.com/api/?i=onions");
  //https://www.food2fork.com/api/search?key=chicken
  //https://jsonblob.com/55e6f861-65ca-11e9-96ea-99f433e2bfb3
  //http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
}
