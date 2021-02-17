import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square3aComponent } from './square3a.component';

describe('Square3aComponent', () => {
  let component: Square3aComponent;
  let fixture: ComponentFixture<Square3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square3aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
