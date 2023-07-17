import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  url = environment.apiUrl;

  upload (body: any) : Observable<HttpResponse<any>>{
    return this.http.post<any>(
      this.url+"videos/upload-video",
      body
    )
  }

  getAllVideos () : Observable<any>{
    return this.http.get(this.url+"videos")
  }
}
