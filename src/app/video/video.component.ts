import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../core/models/video';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
@Input() video : Video = {
  title: "",
  description: "",
  linkUrl: "",
  categories: [],
  publicationDate: "",
}
  constructor() { }

  ngOnInit(): void {
  }
}
