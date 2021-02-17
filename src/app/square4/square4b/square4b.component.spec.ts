import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square4bComponent } from './square4b.component';

describe('Square4bComponent', () => {
  let component: Square4bComponent;
  let fixture: ComponentFixture<Square4bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square4bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square4bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
