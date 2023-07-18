import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-video-details-card',
  templateUrl: './video-details-card.component.html',
  styleUrls: ['./video-details-card.component.scss']
})
export class VideoDetailsCardComponent implements OnInit {
  @Input() video : Video = {
    title: "",
    description: "",
    linkUrl: "",
    categories: [],
    publicationDate: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
