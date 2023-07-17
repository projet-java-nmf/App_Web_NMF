import { SectionComponent } from './../section/section.component';
import { Video } from './../core/models/video';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { VideoService } from '../core/services/video.service';
import { Section } from '../core/models/section';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {
  uploadForm : FormGroup = this.fb.group({
    title : ['', []],
    description : ['', []],
    linkUrl : ['', []],
    publicationDate : ['', []],
    privated : ['false', []],
    public : ['true', []]
  })
  errorMsg : string = "";
  constructor(private fb : FormBuilder,
    private router : Router,
    private videoService : VideoService
    ) { }

  ngOnInit(): void {
  }

  onSubmit (){
    this.videoService.upload(this.uploadForm.value).subscribe(
      (response : any) => {
        this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg = error.message;
      }
    )
  }

  

}
