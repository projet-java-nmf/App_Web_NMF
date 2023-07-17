import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-user-favorites-list',
  templateUrl: './user-favorites-list.component.html',
  styleUrls: ['./user-favorites-list.component.scss']
})
export class UserFavoritesListComponent implements OnInit {
  favoritesVideos : Array<Video> = [];
  constructor() { }

  ngOnInit(): void {
    
  }

}
