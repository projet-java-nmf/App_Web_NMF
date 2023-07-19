import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-section-video',
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss']
})
export class SectionVideoComponent implements OnInit {
  @Input()
  listVideos: Array<Video> = [];
  
  constructor() { }

  ngOnInit(): void {
  }
}
