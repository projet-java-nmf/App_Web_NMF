import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.scss']
})
export class ResetPasswordRequestComponent implements OnInit {

  passwordForgottenForm : FormGroup = this.fb.group({
    email : ['abbesbilel88@yahoo.fr', []],
  })
  errorMsg : string = "";
  confirmMsg : string = "";
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit (){
    this.errorMsg = "";
    this.confirmMsg = "";
    this.authService.resetPasswordRequest(this.passwordForgottenForm.value).subscribe(
      (response : any) => {
        this.confirmMsg = response.message;
      }, (error) =>{
          this.errorMsg = error.error.message;
      }
    )

  }

}
