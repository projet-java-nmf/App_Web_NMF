import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionVideosComponent } from './admin-gestion-videos.component';

describe('AdminGestionVideosComponent', () => {
  let component: AdminGestionVideosComponent;
  let fixture: ComponentFixture<AdminGestionVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
