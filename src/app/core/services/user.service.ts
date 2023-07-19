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

  getMe(): Observable<any> {
    return this.http.get(this.url + "users/me")
  }

  setMe(body: any): Observable<any> {
    return this.http.put<any>(
      this.url + "users/me",
      body
    )
  }


}
