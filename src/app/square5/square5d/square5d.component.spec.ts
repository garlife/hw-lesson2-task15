import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square5dComponent } from './square5d.component';

describe('Square5dComponent', () => {
  let component: Square5dComponent;
  let fixture: ComponentFixture<Square5dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square5dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square5dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
