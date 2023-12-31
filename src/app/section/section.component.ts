import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../core/models/video';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input()
  listVideos: Array<Video> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
