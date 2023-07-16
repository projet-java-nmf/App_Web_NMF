import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionSectionsComponent } from './admin-gestion-sections.component';

describe('AdminGestionSectionsComponent', () => {
  let component: AdminGestionSectionsComponent;
  let fixture: ComponentFixture<AdminGestionSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
