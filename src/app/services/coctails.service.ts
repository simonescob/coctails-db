import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoctailsService {

  url = "https://www.thecocktaildb.com/api/json/v1/1/"

  constructor(
    private http: HttpClient,
  ){}

  getDrinks(){
    return this.http.get(this.url + "search.php?f=a");
  }

  getDrinkDetail(id: number){
    return this.http.get(this.url + `lookup.php?i=${id}`);
  }

}
