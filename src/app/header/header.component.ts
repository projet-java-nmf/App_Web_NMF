import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email : string = '';
  users : Array<any> = [];
  errorMsg : string = "";
 
   constructor(
     private authService : AuthService, private router: Router
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
 
   navigateTo() {
    this.router.navigate(['login'])
  }

   logout(){
     this.authService.logout();
   }


}
