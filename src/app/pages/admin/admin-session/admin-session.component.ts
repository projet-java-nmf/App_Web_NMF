import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-session',
  templateUrl: './admin-session.component.html',
  styleUrls: ['./admin-session.component.scss']
})
export class AdminSessionComponent implements OnInit {

  gender: string = "";
  firstname: string = "";


  constructor(
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

    // window.location.reload();
    if (this.authService.getGender() == 'MALE') this.gender = 'M.';
    if (this.authService.getGender() == 'FEMALE') this.gender = 'Mme';
    this.firstname = this.authService.getFirstname();
  }

}
