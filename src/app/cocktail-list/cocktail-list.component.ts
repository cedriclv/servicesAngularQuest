import { Component } from '@angular/core';
import { CocktailService } from "./../cocktail.service";
import { Cocktail } from "./../model/cocktail";


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

  public cocktails: Cocktail[] =[];
  
  constructor(private cocktailService: CocktailService){}
  ngOnInit(){
    this.getCocktails();      
  }
  getCocktails(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJSON => this.cocktails = cocktailsFromJSON );
  }  

}
