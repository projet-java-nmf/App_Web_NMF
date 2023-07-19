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
  
  loginForm : FormGroup = this.fb.group({
    email : ['', []],
    password : ['', []]
  })
  errorMsg : string = "";
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit (){
    this.authService.login(this.loginForm.value).subscribe(
      (response : any) => {
        console.log(JSON.stringify(response));
        this.authService.setJwt(response.jwt);
        this.authService.setEmail(response.email);
        this.authService.setRoles(response.roles);
        this.router.navigate(['home']);
      },(error) => {
        this.errorMsg = error.error.message;
      }
    )
  }

}
