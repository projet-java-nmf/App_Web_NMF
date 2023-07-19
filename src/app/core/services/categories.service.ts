import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }

  url = environment.apiUrl;

  // ADD UNE CATEGORIE
  addCategory(body: any) : Observable<any>{
    return this.http.post<any>(
      this.url+"categories/create-category",
      body
    );
  }

  //GET TOUTES LES CATEGORIES
  getAllCategory() : Observable<any>{
    return this.http.get(
      this.url+"categories",
    );
  }

  // GET UNE CATEGORIE
  getCategoryById(body: any) : Observable<any>{
    return this.http.put<any>(
      this.url+"categories/{id}",
      body
    );
  }

  // GET UNE CATEGORY PAR SON NOM => getCategoryByName(String Name)
  getCategoryByName(body: any) : Observable<any>{
    return this.http.put<any>(
      this.url+"categories/by-name/{name}",
      body
    );
  }

  //MODIFIER LE NOM D'UNE CATEGORIE : updateVideoCategory()
  updateVideoCategory(body: any) : Observable<any>{
    return this.http.put<any>(
      this.url+"categories/update-category",
      body
    );
  }

}
