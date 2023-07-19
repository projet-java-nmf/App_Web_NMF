import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/core/services/section.service';

@Component({
  selector: 'app-admin-gestion-sections',
  templateUrl: './admin-gestion-sections.component.html',
  styleUrls: ['./admin-gestion-sections.component.scss']
})
export class AdminGestionSectionsComponent implements OnInit {

  sections : Array<any> = [];
  section : Array<any> = [];

  errorMsg1 : string = "";
  successMsg1 : string = "";

  errorMsg2 : string = "";
  successMsg2 : string = "";

  errorMsg3 : string = "";
  successMsg3 : string = "";

  errorMsg4 : string = "";
  successMsg4 : string = "";

  errorMsg5 : string = "";
  successMsg5 : string = "";

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private sectionService : SectionService
  ) { }

  ngOnInit(): void {
    //
  }

  // CREATE SECTION
  sectionForm : FormGroup = this.fb.group({
    name : ['', []],
    description : ['', []]
  })
  onSubmit (){
    console.log(this.sectionForm.value);
    this.errorMsg1 = "";
    this.successMsg1 = "";
    this.sectionService.createSection(this.sectionForm.value).subscribe(
      (response : any) => {
        this.successMsg1 = "Section créé avec succès";
        this.section = response;
        console.log(response);
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg1 = "Une erreur est survenue";
      }
    )
  }

  // GET SECTION BY ID / NAME
  getSectionByIdForm : FormGroup = this.fb.group({
    id : ['', []],
  })
  onSubmit2(){
    console.log(this.getSectionByIdForm.value);
    this.errorMsg2 = "";
    this.successMsg2 = "";
    this.sectionService.getSectionById(this.getSectionByIdForm.value.id).subscribe(
      (response : any) => {
        this.section = response.data;
        console.log(response);
        this.successMsg2 = "Section recherchée avec succès";
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg2 = "Une erreur est survenue";
      }
    )
  }

  // ADD VIDEO BY ID TO SECTION
  addVideoToSectionForm : FormGroup = this.fb.group({
    idSection : ['', []],
    idVideo : ['', []]
  })
  addVideoById(){
    console.log(this.addVideoToSectionForm.value);
    this.errorMsg3 = "";
    this.successMsg3 = "";
    this.sectionService.addVideoById(this.addVideoToSectionForm.value.idSection, this.addVideoToSectionForm.value.idVideo).subscribe(
      (response : any) => {
        this.successMsg3 = "Vidéo ajouté avec succès";
        console.log(response);
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg3 = "Une erreur est survenue";
      }
    )
  }

  // DELETE VIDEO TO SECTION
  deleteVideoOfSectionForm : FormGroup = this.fb.group({
    idSection : ['', []],
    idVideo : ['', []]
  })
  onSubmit4(){
    console.log(this.deleteVideoOfSectionForm.value);
    this.errorMsg4 = "";
    this.successMsg4 = "";
    this.sectionService.removeVideoToSection(this.deleteVideoOfSectionForm.value.idSection, this.deleteVideoOfSectionForm.value.idVideo).subscribe(
      (response : any) => {
        this.successMsg4 = "Vidéo supprimée de la section avec succès";
        this.sections = response;
        console.log(response);
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg4 = "Une erreur est survenue";
      }
    )
  }

  // UPDATE SECTION
  updateSectionForm : FormGroup = this.fb.group({
    name : ['', []],
    description : ['', []]
  })
  onSubmit5(){
    console.log(this.updateSectionForm.value);
    this.errorMsg5 = "";
    this.successMsg5 = "";
    this.sectionService.updateSection(this.updateSectionForm.value).subscribe(
      (response : any) => {
        this.successMsg5 = "Section modifiée avec succès";
        this.section = response;
        console.log(response);
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg5 = "Une erreur est survenue";
      }
    )
  }

}
