import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COCKTAILS } from "./cocktail-fixtures";
import { Cocktail } from "./model/cocktail";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private COCKTAILS_SERVICE = COCKTAILS;
  
  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    console.log(this.http.get<Cocktail[]>('./../assets/cocktails.json'));
    return this.http.get<Cocktail[]>('./../assets/cocktails.json');
  }

}
