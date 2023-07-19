import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-admin-gestion-videos-table-video',
  templateUrl: './admin-gestion-videos-table-video.component.html',
  styleUrls: ['./admin-gestion-videos-table-video.component.scss']
})
export class AdminGestionVideosTableVideoComponent implements OnInit {
  videos : Array<any> = [];
  video : Array<any> = [];

  errorMsg : string = "";
  successMsg : string = "";

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private videoService : VideoService
  ) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(
      (response : any) => {
        this.videos = response;
      }, (error) => {
        console.log(JSON.stringify(error))
        this.errorMsg = error.message;
      }
    )
  }

}
