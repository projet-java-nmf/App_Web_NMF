import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionSectionsTableSectionComponent } from './admin-gestion-sections-table-section.component';

describe('AdminGestionSectionsTableSectionComponent', () => {
  let component: AdminGestionSectionsTableSectionComponent;
  let fixture: ComponentFixture<AdminGestionSectionsTableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGestionSectionsTableSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionSectionsTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
