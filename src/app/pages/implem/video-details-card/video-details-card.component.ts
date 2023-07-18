import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-video-details-card',
  templateUrl: './video-details-card.component.html',
  styleUrls: ['./video-details-card.component.scss']
})
export class VideoDetailsCardComponent implements OnInit {
  @Input() video : Video = {
    id: 0,
    title: "",
    description: "",
    linkUrl: "",
    categories: [],
    publicationDate: ""
  }
  constructor(private domSanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }
  convertToSafeUrl(url : string ){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
