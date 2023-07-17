import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Video } from 'src/app/core/models/video';
import { VideoService } from 'src/app/core/services/video.service';

@Component({
  selector: 'app-admin-gestion-videos-table-video',
  templateUrl: './admin-gestion-videos-table-video.component.html',
  styleUrls: ['./admin-gestion-videos-table-video.component.scss']
})
export class AdminGestionVideosTableVideoComponent implements OnInit {
  videosList: Video[] = [];
  errorMsg : string = "";

  constructor(private fb : FormBuilder,
    private router : Router,
    private videoService : VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(
      response =>{
        this.videosList = response;
      }
    );
  }

}
