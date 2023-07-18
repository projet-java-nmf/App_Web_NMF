import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http : HttpClient) { }
  url = environment.apiUrl;

  getAllSections(): Observable<any>{
    return this.http.get(this.url+"sections")

  }

  createSection(body : any): Observable<any>{
    return this.http.post<any>(
      this.url+"sections/create-section", body);
  }

  addVideoById(idSection : number, idVideo : number): Observable<any>{
    return this.http.get(
      this.url+"sections/add-video-to-section?idSection="+idSection+"&idVideo="+idVideo);
  }
}
