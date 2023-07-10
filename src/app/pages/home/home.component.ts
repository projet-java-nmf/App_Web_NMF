import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 email : string = '';
 users : Array<any> = [];
 errorMsg : string = "";

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.email = this.authService.getEmail();
    this.authService.getUsers().subscribe(
      (response : any) => {
        this.users = response;
      },(error) => {
        console.log(JSON.stringify(error));
        this.errorMsg = error.message;
      }
    )
  }

  logout(){
    this.authService.logout();
  }

}
