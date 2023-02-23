import { Injectable } from '@angular/core';
import { COCKTAILS } from "./cocktail-fixtures";
import { Cocktail } from "./model/cocktail";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private COCKTAILS_SERVICE = COCKTAILS;
  
  constructor() { }

  getCocktails(): Cocktail[] {
    return this.COCKTAILS_SERVICE;
  }

}
