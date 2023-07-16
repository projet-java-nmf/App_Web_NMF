import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionCategoriesTableCategoryComponent } from './admin-gestion-categories-table-category.component';

describe('AdminGestionCategoriesTableCategoryComponent', () => {
  let component: AdminGestionCategoriesTableCategoryComponent;
  let fixture: ComponentFixture<AdminGestionCategoriesTableCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionCategoriesTableCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionCategoriesTableCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
