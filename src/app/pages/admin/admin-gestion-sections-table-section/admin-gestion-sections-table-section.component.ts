import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/core/services/section.service';

@Component({
  selector: 'app-admin-gestion-sections-table-section',
  templateUrl: './admin-gestion-sections-table-section.component.html',
  styleUrls: ['./admin-gestion-sections-table-section.component.scss']
})
export class AdminGestionSectionsTableSectionComponent implements OnInit {

  sections : Array<any> = [];
  section : Array<any> = [];

  errorMsg : string = "";
  successMsg : string = ""

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private sectionService : SectionService
  ) { }

  ngOnInit(): void {
    this.sectionService.getAllSection().subscribe(
      (response : any) => {
        this.sections = response;
      }, (error) => {
        console.log(JSON.stringify(error))
        this.errorMsg = error.message;
      }
    )
  }
}
