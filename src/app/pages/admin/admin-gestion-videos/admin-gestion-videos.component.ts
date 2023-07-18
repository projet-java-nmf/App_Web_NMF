import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-admin-gestion-videos',
  templateUrl: './admin-gestion-videos.component.html',
  styleUrls: ['./admin-gestion-videos.component.scss']
})
export class AdminGestionVideosComponent implements OnInit {

  // UPLOADER VIDEO
  videoForm: FormGroup = this.fb.group({
    titre : [''],
    description : [''],
    date: [''],
    lien: [''],
    type: [''],
    teaser: ['']
  })

  constructor(
    private fb : FormBuilder
    ) { }

  get fVideo() { return this.videoForm.controls;}

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  onSubmit(): void { 
    this.videoForm.value;
  }


  // Rechercher une vidéo
  videoSearchForm: FormGroup = this.fb.group({
    idVideo : [''],
    titreVideo : ['']
  })

  get fvideoSearch() { return this.videoForm.controls;}

  ngOnInit2(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  onSubmit2(): void { 
    this.videoSearchForm.value;
  }
  
}
