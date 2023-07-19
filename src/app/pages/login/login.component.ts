import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['msykhanou@yahoo.fr', []],
    password: ['azerty', []]
  })
  errorMsg: string = "";
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.errorMsg = "";
    this.authService.login(this.loginForm.value).subscribe(
      (response : any) => {
        this.authService.setJwt(response.jwt);
        this.authService.setEmail(response.email);
        this.authService.setRoles(response.roles);
        this.authService.setGender(response.gender);
        this.authService.setFirstname(response.firstname);
        // this.router.navigate(['home']);
        if (response.roles.includes('ADMIN')) {
          console.log("1");
          this.router.navigate(['admin-session']);
        } else {
          if (response.roles.includes('USER')) {
            console.log("2");
            this.router.navigate(['user-session']);
            //this.router.navigate(['login']);
          } else {
            console.log("3");
            this.router.navigate(['home']);
          }
        }
        //  console.log('totot ' + response.roles.includes('ADMIN'));
        //  console.log('totot2 ' + response.roles.includes('USER'));
      }, (error) => {
        this.errorMsg = error.message;
      }
    )
  }

  typeForPassword: string = "password";

  seePassword() {
    if (this.typeForPassword === "password") {
      this.typeForPassword = "text";
    } else {
      this.typeForPassword = "password";
    }

  }


}
