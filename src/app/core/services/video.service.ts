import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  url = environment.apiUrl;

  // ADD UNE VIDEO
  upload(body: any) : Observable<any>{
    return this.http.post<any>(
      this.url+"videos/upload-video",
      body
    )
  }

  // GET TOUTES LES VIDEOS
  getAllVideos() : Observable<any>{
    return this.http.get(
      this.url+"videos"
      )
  }

  // GET UNE VIDEO BY ID
  getVideoById(body : any) : Observable<any>{
    return this.http.post<any>(
      this.url+"videos/{id}",
      body
    );
  }

  // SUPPRIMER UNE VIDEO
  removeVideo(body : any) : Observable<any>{
    return this.http.delete<any>(
      this.url+"videos/remove",
      body
    );
  }
  
  // MODIFIER UNE VIDEO
  updateVideo(body : any) : Observable<any>{
    return this.http.put<any>(
      this.url+"videos/update-video",
      body
    );
  }
  
  //GET TOUTES LES VIDEOS PUBLIC
  getAllPublicVideos(body : any) : Observable<any>{
    return this.http.post<any>(
      this.url+"videos/public/{isPrivate}",
      body
    );
  }
  
  // ADD CATEGORY TO VIDEO BY Id
  addCategoryToVideoById(body : any) : Observable<any>{
    return this.http.post<any>(
      this.url+"videos/add-category",
      body
    );
  }
    
  // GET VIDEOS BY CATEGORY
  getVideosByCategory(body : any) : Observable<any>{
    return this.http.post<any>(
      this.url+"videos/by-category/{idCategory}",
      body
    );
  }

}
