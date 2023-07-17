import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error, log } from 'console';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {

  emailConfirmForm: FormGroup = this.fb.group({
    code: ['', []],
  })
  email: string = "";
  errorMsg: string = "";
  confirmMsg: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.email = params.get('email') + "";
    });
  }

  onSubmit() {
    this.authService.verifyEmail(this.emailConfirmForm.value, this.email).subscribe(
      (response: any) => {
        this.confirmMsg = response.message + "\nVeuillez patienter, vous allez être rediriger vers la page de login.";
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 5000);  //5s;

        //  this.router.navigate(['login']);
        //  console.log(JSON.stringify(response))

      }, (error) => {
        // let msg = error.error.message;
        // let status = error.status;
        this.errorMsg = error.error.message;
        console.log(JSON.stringify(error))

      }
    )
  }

}
