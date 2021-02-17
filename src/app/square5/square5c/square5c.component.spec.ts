import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square5cComponent } from './square5c.component';

describe('Square5cComponent', () => {
  let component: Square5cComponent;
  let fixture: ComponentFixture<Square5cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square5cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square5cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
