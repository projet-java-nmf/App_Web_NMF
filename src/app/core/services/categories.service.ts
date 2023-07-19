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

  createCategory(body : any): Observable<any>{
    return this.http.post<any>(
      this.url+"categories/create-category", body);
  }

  getCategoryById(id : number): Observable<any>{
    return this.http.get(
      this.url+"categories/"+id);
  }

  getCategoryByName(name : string): Observable<any>{
    return this.http.get(
      this.url+"categories/by-name/name="+name);
  }
}
