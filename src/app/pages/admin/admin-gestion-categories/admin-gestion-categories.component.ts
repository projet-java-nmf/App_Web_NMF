import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-admin-gestion-categories',
  templateUrl: './admin-gestion-categories.component.html',
  styleUrls: ['./admin-gestion-categories.component.scss']
})
export class AdminGestionCategoriesComponent implements OnInit {
  categoryForm : FormGroup = this.fb.group({
    name : ['', []],
  })
  errorMsg : string = "";
  successMsg : string = "";
  
  searchCategoryByIdForm : FormGroup = this.fb.group({
    id : ['', []],
  })

  searchCategoryByNameForm : FormGroup = this.fb.group({
    name : ['', []],
  })

  constructor( private fb : FormBuilder, private categoriesService : CategoriesService) { }

  ngOnInit(): void {
  }
  onSubmit (){
    this.categoriesService.createCategory(this.categoryForm.value).subscribe(
      (response : any) => {
        this.successMsg = "Vidéo ajouté avec succès";
      },(error) => {
        this.errorMsg = "Une erreur est survenue";
      }
    )
  }

  getCategoryById(){
    console.log(this.searchCategoryByIdForm.value.id);
    this.categoriesService.getCategoryById(this.searchCategoryByIdForm.value.id).subscribe(
      (response : any) =>{
        this.successMsg = "Catégorie trouvé !";
      },(error) => {
        this.errorMsg = "Une erreur est survenue";
      }
    )
  }

  getCategoryByName(){
    console.log(this.searchCategoryByIdForm.value.name);
    this.categoriesService.getCategoryByName(this.searchCategoryByNameForm.value.name).subscribe(
      (response : any) =>{
        this.successMsg = "Catégorie trouvé !";
      },(error) => {
        this.errorMsg = "Une erreur est survenue";
      }
    )
  }
}
