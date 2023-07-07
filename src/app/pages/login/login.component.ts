import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit (){
    console.log(this.loginForm.value)
  }

}
