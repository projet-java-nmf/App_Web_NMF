import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionUsersTableUserComponent } from './admin-gestion-users-table-user.component';

describe('AdminGestionUsersTableUserComponent', () => {
  let component: AdminGestionUsersTableUserComponent;
  let fixture: ComponentFixture<AdminGestionUsersTableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionUsersTableUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionUsersTableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
