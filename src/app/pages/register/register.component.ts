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

  registerForm: FormGroup = this.fb.group({
    gender: ['MALE', []],
    firstname: ['Mickael', []],
    lastname: ['SYKHA', []],
    // email: ['projet.java.nmf@gmail.com', []],
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
    console.log(this.registerForm.value);
    // this.authService.register(this.registerForm.value).subscribe(
    //   (response: any) => {
    //     this.router.navigate(['email-confirmation', response.email]);
    //   }
    // )

    // Mickael
    this.errorMsg = "";
    this.authService.register(this.registerForm.value).subscribe(
      (response: any) => {
        console.log('reponse : ' + JSON.stringify(response));
        this.router.navigate(['email-confirmation', response.email]);

      }, (error) => {
        console.log(error);
        this.errorMsg = error.message;
      }
    )

    //console.log(this.emailConfirForm.value)

    //
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
