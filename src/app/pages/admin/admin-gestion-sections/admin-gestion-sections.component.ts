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
sectionForm : FormGroup = this.fb.group({
  name : ['', []],
  description : ['', []]
})
errorMsg : string = "";
successMsg : string = "";

addVideoToSectionForm : FormGroup = this.fb.group({
  idSection : ['', []],
  idVideo : ['', []]
})
  constructor(
    private fb : FormBuilder, 
    private sectionService : SectionService,
    private router : Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit (){
    console.log(this.sectionForm.value);
    this.sectionService.createSection(this.sectionForm.value).subscribe(
      (response : any) => {
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg = error.message;
      }
    )
  }

  addVideoById(){
    this.errorMsg = "";
    this.successMsg = "";
    console.log(this.addVideoToSectionForm.value);
    this.sectionService.addVideoById(this.addVideoToSectionForm.value.idSection, this.addVideoToSectionForm.value.idVideo).subscribe(
      (response : any) => {
        this.successMsg = "Vidéo ajouté avec succès";
        // this.router.navigate(['app-admin-gestion-videos-table-video']);
      },(error) => {
        this.errorMsg = "Une erreur est survenue";
      }
    )
  }
}
