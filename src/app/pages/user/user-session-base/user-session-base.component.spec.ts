import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSessionBaseComponent } from './user-session-base.component';

describe('UserSessionBaseComponent', () => {
  let component: UserSessionBaseComponent;
  let fixture: ComponentFixture<UserSessionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSessionBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSessionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
