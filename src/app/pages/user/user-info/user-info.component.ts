import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {



  myInfoForm: FormGroup = this.fb.group({
    gender: ['', []],
    firstname: ['', []],
    lastname: ['', []],
    email: ['', []],
  })


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService


  ) { }

  errorMsg: string = "";

  ngOnInit(): void {
    this.userService.getMe().subscribe(
      (response: any) => {
        console.log("reponse : " + JSON.stringify(response));

        this.myInfoForm.setValue({ // all properties need to be set
          gender: response.gender,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email
        }
        );
        // this.user = response.response;
      }, (error) => {
        console.log(JSON.stringify(error));
        this.errorMsg = error.message;
      }
    );

  }

  onSubmit() {
    this.userService.setMe(this.myInfoForm.value).subscribe(
      (response: any) => {
        console.log("reponse : " + JSON.stringify(response));

        this.myInfoForm.setValue({ // all properties need to be set
          gender: response.gender,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email
        }
        );
        // this.user = response.response;
      }, (error) => {
        console.log(JSON.stringify(error));
        this.errorMsg = error.message;
      }
    );


    alert("Sauvegarde");
  }

}
