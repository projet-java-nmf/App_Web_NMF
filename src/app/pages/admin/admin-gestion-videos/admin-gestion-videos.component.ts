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
  uploadForm : FormGroup = this.fb.group({
    title : ['', []],
    description : ['', []],
    linkUrl : ['', []],
    publicationDate : ['', []],
    private : ['false', []],
    hasTeaser : ['true', []]
  })
  errorMsg : string = "";
  constructor(private fb : FormBuilder,
    private router : Router,
    private videoService : VideoService
    ) { }

  ngOnInit(): void {
  }

  onSubmit (){
    console.log(this.uploadForm.value);
    this.videoService.upload(this.uploadForm.value).subscribe(
      (response : any) => {
        console.log(response);
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg = error.message;
      }
    )
  }


}
