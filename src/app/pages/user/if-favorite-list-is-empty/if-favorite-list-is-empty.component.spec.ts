import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfFavoriteListIsEmptyComponent } from './if-favorite-list-is-empty.component';

describe('IfFavoriteListIsEmptyComponent', () => {
  let component: IfFavoriteListIsEmptyComponent;
  let fixture: ComponentFixture<IfFavoriteListIsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfFavoriteListIsEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfFavoriteListIsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
