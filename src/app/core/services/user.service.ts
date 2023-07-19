import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = environment.apiUrl;


  setMe(body: any): Observable<any> {
    return this.http.put<any>(
      this.url + "users/me",
      body
    )
  }


  //GET ALL USERS
  getAllUsers() : Observable<any>{
    return this.http.get(
      this.url+"users",
    );
  }

  // GET USER BY AUTHENTIFICATION
  getMe() : Observable<any>{
    return this.http.get(
      this.url+"users/me"
      )
  }

  //GET USER NAME
  getName() : Observable<any>{
    return this.http.get(
      this.url+"users/getUserName",
    );
  }

  //GET ROLES
  getRoles() : Observable<any>{
    return this.http.get(
      this.url+"users/getRoles",
    );
  }

  // ADD VIDEO TO FAVORITES
  addVideoToFavorites(body: any) : Observable<any>{
    return this.http.post<any>(
      this.url+"users/addVideoToFavorites",
      body
    );
  }

  // UPDATE USER
  updateUser(body: any) : Observable<any>{
    return this.http.put<any>(
      this.url+"users",
      body
    );
  }

  // DELETE USER
  deleteUser(body: any) : Observable<any>{
    return this.http.delete<any>(
      this.url+"users",
      body
    );
  }

}
