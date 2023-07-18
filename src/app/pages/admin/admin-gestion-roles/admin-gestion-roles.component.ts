import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-gestion-roles',
  templateUrl: './admin-gestion-roles.component.html',
  styleUrls: ['./admin-gestion-roles.component.scss']
})
export class AdminGestionRolesComponent implements OnInit {

  roles: Array<any> = [];


  rolesByIdForm: FormGroup = this.fb.group({
    id: ['1', []]
  })
  activeRolesById: boolean = false;


  users: Array<any> = [];
  usersByRoleForm: FormGroup = this.fb.group({
    role: ['ADMIN', []]
  })

  errorMsg: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.errorMsg = "";

  }

  searchRolesById() {
    this.errorMsg = "";
    this.activeRolesById = true;
    this.authService.getRolesById(this.rolesByIdForm.value).subscribe(
      (response: any) => {
        console.log(response)
        this.roles = response;
      }, (error) => {
        console.log(JSON.stringify(error));
        this.errorMsg = error.message;
      }
    );
  }



  errorMsg2: string = "";

  searchUsersByRole() {
    console.log("coucou" + JSON.stringify(this.usersByRoleForm.value));

    //    this.authService.getUsersByRole(this.usersByRoleForm.value).subscribe(
    this.authService.getUsersByRole(this.usersByRoleForm.value).subscribe(
      (response: any) => {
        console.log("reponse : " + JSON.stringify(response))
        this.users = response.response;
      }, (error) => {
        console.log(JSON.stringify(error));
        this.errorMsg2 = error.message;
      }
    );
  }



}
