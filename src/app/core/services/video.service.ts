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

  // ADD VIDEO
  upload(body: any) : Observable<HttpResponse<any>>{
    return this.http.post<any>(
      this.url+"videos/upload-video",
      body
    )
  }

  // GET ALL VIDEOS
  getAllVideos() : Observable<any>{
    return this.http.get(
      this.url+"videos"
      )
  }

  // GET VIDEO BY ID
  getVideoById(id : number) : Observable<any>{
    return this.http.get(
      this.url+"videos/"+id
    );
  }

  // DELETE VIDEO
  removeVideo(id : number) : Observable<any>{
    return this.http.delete(
      this.url+"videos/remove"+id
    );
  }
  
  // UPDATE VIDEO
  updateVideo(body : any) : Observable<any>{
    return this.http.put<any>(
      this.url+"videos/update-video",
      body
    );
  }
  
  // GET ALL PUBLIC VIDEOS
  getAllPublicVideos(isPrivate : string) : Observable<any>{
    return this.http.get(
      this.url+"videos/public/"+isPrivate
    );
  }
  
  // ADD CATEGORY TO VIDEO BY Id
  addCategoryToVideoById(videoId : number, categoryId : number) : Observable<any>{
    return this.http.get(
      this.url+"videos/add-category?videoId="+videoId+"&categoryId="+categoryId
    );
  }
    
  // GET VIDEOS BY CATEGORY
  getVideosByCategory(id: number) : Observable<any>{
    return this.http.get<any>(
      this.url+"videos/by-category/"+id
    );
  }

}
