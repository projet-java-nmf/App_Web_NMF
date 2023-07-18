import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video : Video = {
    title: "",
    description: "",
    linkUrl: "",
    categories: [],
    publicationDate: ""
  }
  constructor(
    private domSanitizer : DomSanitizer
  ) { }
 
  ngOnInit(): void {
  }

  convertToSafeUrl(url : string ){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
