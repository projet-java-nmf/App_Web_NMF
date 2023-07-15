import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-franck-header',
  templateUrl: './franck-header.component.html',
  styleUrls: ['./franck-header.component.scss']
})
export class FranckHeaderComponent implements OnInit {

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
