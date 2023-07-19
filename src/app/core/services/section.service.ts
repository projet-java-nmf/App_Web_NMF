import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http : HttpClient) { }

  url = environment.apiUrl;

  // ADD A SECTION
  createSection(body: any) : Observable<any>{
    return this.http.post<any>(
      this.url+"sections/create-section",
      body
    );
  }

  // GET ALL SECTIONS
  getAllSection() : Observable<any>{
    return this.http.get(
      this.url+"sections"
    );
  }

  // GET A SECTION BY ID
  getSectionById(id: number) : Observable<any>{
    return this.http.get<any>(
      this.url+"sections/"+id
    );
  }

  // UPDATE A SECTION
  updateSection(body: any) : Observable<any>{
    return this.http.put<any>(
      this.url+"sections/update-section",
      body
    );
  }

  // DELETE A SECTION BY ID
  removeSection(body: any) : Observable<any>{
    return this.http.delete<any>(
      this.url+"sections/remove-section/{id}",
      body
    );
  }

  // ADD A VIDEO BY ID
  // addVideoToSectionById(body: any) : Observable<any>{
  //   return this.http.post<any>(
  //     this.url+"sections/add-video-to-section",
  //     body
  //   );
  // }
  addVideoById(idSection : number, idVideo : number): Observable<any>{
    return this.http.get(
      this.url+"sections/add-video-to-section?idSection="+idSection+"&idVideo="+idVideo);
  }

  // DELETE A VIDEO BY ID
  removeVideoToSection(idSection : number, idVideo : number): Observable<any>{
    return this.http.delete(
      this.url+"sections/remove-video-to-section?idSection=" + idSection + "&idVideo=" + idVideo
    );
  }

}
