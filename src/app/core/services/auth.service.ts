import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  setJwt(jwt: string) {
    localStorage.setItem("jwt", jwt)
  }

  getJwt() {
    return localStorage.getItem("jwt") || ''
  }

  setEmail(email: string) {
    localStorage.setItem("email", email);
  }

  getEmail() {
    return localStorage.getItem("email") || ''
  }

  setRoles(roles: string) {
    localStorage.setItem("roles", roles)
  }

  getRoles() {
    return localStorage.getItem("roles") || ''
  }

  setGender(gender: string) {
    localStorage.setItem("gender", gender)
  }

  getGender() {
    return localStorage.getItem("gender")
  }

  setFirstname(firstname: string) {
    localStorage.setItem("firstname", firstname)
  }

  getFirstname() {
    return localStorage.getItem("firstname") || ''
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    localStorage.removeItem('roles');
    localStorage.removeItem('gender');
    localStorage.removeItem('firstname');
  }


  url = environment.apiUrl;

  login(body: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.url + "auth/login",
      body
    )
  }

  register(body: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.url + "auth/sign-up-user",
      body
    )
  }

  verifyEmail(body: any, email: string): Observable<any> {
    return this.http.post<any>(
      this.url + "auth/email-confirmation/" + email,
      body
    )
  }

  resetPasswordRequest(body: any): Observable<any> {
    return this.http.post<any>(
      this.url + "auth/reset-password-request",
      body
    )
  }

  resetPassword(body: any): Observable<any> {
    return this.http.put<any>(
      this.url + "auth/reset-password",
      body
    )
  }

  getUsers(): Observable<any> {
    return this.http.get(this.url + "users")
  }

}
