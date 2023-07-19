import { User } from './../../../core/models/user';
import { VideoService } from 'src/app/core/services/video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-favorites-list',
  templateUrl: './user-favorites-list.component.html',
  styleUrls: ['./user-favorites-list.component.scss']
})
export class UserFavoritesListComponent implements OnInit {
  favoritesVideos : Array<Video> = [];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getMe().subscribe(
      response =>{
        this.favoritesVideos = response.favoritesList;
      }
    )
  }

  


}
