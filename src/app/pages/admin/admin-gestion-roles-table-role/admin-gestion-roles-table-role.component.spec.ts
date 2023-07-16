import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionRolesTableRoleComponent } from './admin-gestion-roles-table-role.component';

describe('AdminGestionRolesTableRoleComponent', () => {
  let component: AdminGestionRolesTableRoleComponent;
  let fixture: ComponentFixture<AdminGestionRolesTableRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionRolesTableRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionRolesTableRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
