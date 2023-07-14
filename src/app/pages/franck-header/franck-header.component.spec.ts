import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranckHeaderComponent } from './franck-header.component';

describe('FranckHeaderComponent', () => {
  let component: FranckHeaderComponent;
  let fixture: ComponentFixture<FranckHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranckHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranckHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
