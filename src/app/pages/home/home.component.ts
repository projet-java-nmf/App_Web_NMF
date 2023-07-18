import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/core/models/section';
import { Video } from 'src/app/core/models/video';
import { AuthService } from 'src/app/core/services/auth.service';
import { SectionService } from 'src/app/core/services/section.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 video: Video = {
  id: 0,
   title: "Exemple",
   description: "blabla",
   linkUrl: "https://www.youtube.com/embed/CsP36lUNPT0",
   categories: ["action"],
   publicationDate: "22/12/2022"
 }
 email : string = '';
 users : Array<any> = [];
 errorMsg : string = "";

 sections : Array<Section> = [
  {
    name : "Sécurité informatique",
    description : "assets/img/security.jpg",
    videos: [
      {id: 1,
        title: "Exemple",
      description: "blabla",
      linkUrl: "https://www.google.fr",
      categories: ["action"],
      publicationDate: "22/12/2022"},
      {id: 2,
        title: "NANANA",
      description: "blabla",
      linkUrl: "https://www.google.fr",
      categories: ["Drame"],
      publicationDate: "22/12/2022"}
    ]
  },
  {
    name : "Yoga Position",
    description : "assets/img/security.jpg",
    videos: [
      {id: 3,
        title: "Exemple",
      description: "blabla",
      linkUrl: "https://www.youtube.com/embed/CsP36lUNPT0",
      categories: ["action"],
      publicationDate: "22/12/2022"},
      {id: 4,
        title: "NANANA",
      description: "blabla",
      linkUrl: "https://www.youtube.com/embed/CsP36lUNPT0",
      categories: ["Drame"],
      publicationDate: "22/12/2022"}
    ]
  }
 ];

  constructor(
    private authService : AuthService,
    private sectionService : SectionService
  ) { }

  ngOnInit(): void {
    this.email = this.authService.getEmail();
    this.authService.getUsers().subscribe(
      (response : any) => {
        this.users = response;
      },(error) => {
        this.errorMsg = error.message;
      }
    )
    this.sectionService.getAllSections().subscribe(
      (response : any) => {
        this.sections = response;
      },(error) => {
        this.errorMsg = error.message;
      }
    )
  }

  logout(){
    this.authService.logout();
  }

}
