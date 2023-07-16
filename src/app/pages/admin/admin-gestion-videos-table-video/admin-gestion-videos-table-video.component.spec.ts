import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionVideosTableVideoComponent } from './admin-gestion-videos-table-video.component';

describe('AdminGestionVideosTableVideoComponent', () => {
  let component: AdminGestionVideosTableVideoComponent;
  let fixture: ComponentFixture<AdminGestionVideosTableVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionVideosTableVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionVideosTableVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
