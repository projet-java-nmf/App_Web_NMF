import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm : FormGroup = this.fb.group({
    password : ['', []],
  })
  errorMsg : string = "";
  confirmMsg : string = "";
  token : string = "";

  
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token')+"";
    });
  }

  onSubmit (){
    this.authService.resetPassword(
      {
        token : this.token,
        password : this.resetPasswordForm.controls['password'].value
      }
      ).subscribe(
      (response : any) => {
        this.confirmMsg = response.message;
      }, (error) =>{
        this.errorMsg = error.error.message;
      }
    )

  }

}
