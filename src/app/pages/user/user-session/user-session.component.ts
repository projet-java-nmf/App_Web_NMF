import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-session',
  templateUrl: './user-session.component.html',
  styleUrls: ['./user-session.component.scss']
})
export class UserSessionComponent implements OnInit {

  gender: string = "";
  firstname: string = "";

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    //window.location.reload();
  }


  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

    // window.location.reload()
    if (this.authService.getGender() == 'MALE') this.gender = 'M.';
    if (this.authService.getGender() == 'FEMALE') this.gender = 'Mme';
    this.firstname = this.authService.getFirstname();
  }


}
