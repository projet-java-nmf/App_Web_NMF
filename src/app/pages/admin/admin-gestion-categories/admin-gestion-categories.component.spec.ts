import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionCategoriesComponent } from './admin-gestion-categories.component';

describe('AdminGestionCategoriesComponent', () => {
  let component: AdminGestionCategoriesComponent;
  let fixture: ComponentFixture<AdminGestionCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
