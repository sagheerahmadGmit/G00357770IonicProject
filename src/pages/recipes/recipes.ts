import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipesProvider } from '../../providers/recipes/recipes'

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
//local variables
  movies: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeProvider: RecipesProvider) {
  }

  //get the information from the api
  ionViewDidLoad(){
   this.recipeProvider.GetMovies().subscribe((data)=>{
     this.movies = data.Search;
   })
  }

}
