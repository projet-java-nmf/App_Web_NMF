import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-admin-gestion-videos',
  templateUrl: './admin-gestion-videos.component.html',
  styleUrls: ['./admin-gestion-videos.component.scss']
})
export class AdminGestionVideosComponent implements OnInit {
  errorMsg : string = "";
  constructor(private fb : FormBuilder,
    private router : Router,
    private videoService : VideoService
    ) { }

  videos : Array<any> = [];
  video : Array<any> = [];

  errorMsg1 : string = "";
  successMsg1 : string = "";

  errorMsg2 : string = "";
  successMsg2 : string = "";

  errorMsg3 : string = "";
  successMsg3 : string = "";

  errorMsg4 : string = "";
  successMsg4 : string = "";

  errorMsg5 : string = "";
  successMsg5 : string = "";

  errorMsg6 : string = "";
  successMsg6 : string = "";


  ngOnInit(): void {
    //
  }

  // ADD VIDEO
  uploadForm : FormGroup = this.fb.group({
    title : ['', []],
    description : ['', []],
    linkUrl : ['', []],
    publicationDate : ['', []],
    private : ['false', []],
    hasTeaser : ['true', []]
  })
  onSubmit() {
    console.log(this.uploadForm.value);
    this.errorMsg1 = "";
    this.successMsg1 = "";
    this.videoService.upload(this.uploadForm.value).subscribe(
      (response : any) => {
        this.successMsg1 = "Vidéo créé avec succès";
        this.video = response;
        console.log(response);
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg1 = "Une erreur est survenue";
      }
    )
  }

  // GET VIDEO BY ID
  getVideoByIdForm: FormGroup = this.fb.group({
    id : ['', []]
  })
  onSubmit2() {
    console.log(this.getVideoByIdForm.value);
    this.errorMsg2 = "";
    this.successMsg2 = "";
    this.videoService.getVideoById(this.getVideoByIdForm.value.id).subscribe(
      (response: any) => {
        this.successMsg2 = "Vidéo recherchée avec succès";
        this.video = response;
        console.log(response);
      }, (error) => {
        this.errorMsg2 = "Une erreur est survenue";
      }
    )
  }
  
  //ADD CATEGORY TO VIDEO BY ID
  addCategoryToVideoByIdForm: FormGroup = this.fb.group({
    videoId : ['', []],
    categoryId : ['', []]
  })
  onSubmit3() {
    console.log(this.addCategoryToVideoByIdForm.value);
    this.errorMsg3 = "";
    this.successMsg3 = "";
    this.videoService.addCategoryToVideoById(this.addCategoryToVideoByIdForm.value.videoId, this.addCategoryToVideoByIdForm.value.categoryId).subscribe(
      (response: any) => {
        this.successMsg3 = "succès";
        this.video = response;
        console.log(response);
      }, (error) => {
        this.errorMsg3 = "Une erreur est survenue";
      }
    )
  }

  //GET VIDEOS BY CATEGORY
  getVideosByCategoryForm: FormGroup = this.fb.group({
    id : ['', []]
  })
  onSubmit4() {
    console.log(this.getVideosByCategoryForm.value);
    this.errorMsg4 = "";
    this.successMsg4 = "";
    this.videoService.getVideosByCategory(this.getVideosByCategoryForm.value.id).subscribe(
      (response: any) => {
        this.successMsg4 = "succès";
        this.videos = response;
        console.log(response);
      }, (error) => {
        this.errorMsg4 = "Une erreur est survenue";
      }
    )
  }

  //GET ALL PUBLIC VIDEOS
  getAllPublicVideosForm: FormGroup = this.fb.group({
    private : ['false', []],
  })
  onSubmit5() {
    console.log(this.getAllPublicVideosForm.value);
    this.errorMsg5 = "";
    this.successMsg5 = "";
    this.videoService.getAllPublicVideos(this.getAllPublicVideosForm.value.isPrivate).subscribe(
      (response: any) => {
        this.successMsg5 = "succès";
        this.videos = response;
        console.log(response);
      }, (error) => {
        this.errorMsg5 = "Une erreur est survenue";
      }
    )
  }

  //UPDATE VIDEO
  updateVideoForm: FormGroup = this.fb.group({
    title : ['', []],
    description : ['', []],
    linkUrl : ['', []],
    publicationDate : ['', []],
    private : ['false', []],
    hasTeaser : ['true', []]
  })
  onSubmit6() {
    console.log(this.updateVideoForm.value);
    this.errorMsg6 = "";
    this.successMsg6 = "";
    this.videoService.updateVideo(this.updateVideoForm.value).subscribe(
      (response: any) => {
        this.successMsg6 = "Vidéo modifiée avec succès";
        this.video = response.data;
        console.log(response);
      }, (error) => {
        this.errorMsg6 = "Une erreur est survenue";
      }
    )
  }

}
