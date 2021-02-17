import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square5bComponent } from './square5b.component';

describe('Square5bComponent', () => {
  let component: Square5bComponent;
  let fixture: ComponentFixture<Square5bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square5bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
