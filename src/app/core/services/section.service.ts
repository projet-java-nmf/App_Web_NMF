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
}
