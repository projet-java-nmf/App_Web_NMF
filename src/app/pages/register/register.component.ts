import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup = this.fb.group({
    email : ['projet.java.nmf@gmail.com', []],
    password : ['azerty', []]
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
    this.authService.register(this.registerForm.value).subscribe(
      (response : any) => {
        this.router.navigate(['email-confirmation', response.email]);
      } 
    )

  }


}
