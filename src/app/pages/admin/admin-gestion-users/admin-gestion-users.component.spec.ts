import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionUsersComponent } from './admin-gestion-users.component';

describe('AdminGestionUsersComponent', () => {
  let component: AdminGestionUsersComponent;
  let fixture: ComponentFixture<AdminGestionUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
