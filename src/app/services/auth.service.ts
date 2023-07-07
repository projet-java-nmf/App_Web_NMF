import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  url = environment.apiUrl;

  login (body : any) : Observable<HttpResponse<any>>{
    return this.http.post<any>(
      this.url+"auth/login",
      body
    )
  }

  register (body : any) : Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.url+"auth/sign-up-user",
      body
    )
  }

  verifyEmail (body : any, email : string) : Observable<any> {
    return this.http.post<any>(
      this.url+"auth/email-confirmation/"+email,
      body
    )
  }

  resetPasswordRequest (body : any) : Observable<any> {
    return this.http.post<any>(
      this.url+"auth/reset-password-request",
      body
    )
  }

  resetPassword (body : any) : Observable<any> {
    return this.http.put<any>(
      this.url+"auth/reset-password",
      body
    )
  }

}
