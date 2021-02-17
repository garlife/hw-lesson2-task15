import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square4aComponent } from './square4a.component';

describe('Square4aComponent', () => {
  let component: Square4aComponent;
  let fixture: ComponentFixture<Square4aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square4aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
