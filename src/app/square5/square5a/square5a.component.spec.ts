import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square5aComponent } from './square5a.component';

describe('Square5aComponent', () => {
  let component: Square5aComponent;
  let fixture: ComponentFixture<Square5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square5aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
