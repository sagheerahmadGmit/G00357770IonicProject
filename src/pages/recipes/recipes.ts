import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipesProvider} from '../../providers/recipes/recipes'
/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeProvider: RecipesProvider) {
  }

  ionViewDidLoad(){
    this.recipeProvider.GetRecipes().subscribe((data)=>{
      this.recipes = data.Search;
      console.log(this.recipes);
    });
  }

}
