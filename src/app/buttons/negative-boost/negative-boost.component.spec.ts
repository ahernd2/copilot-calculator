import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeBoostComponent } from './negative-boost.component';

describe('NegativeBoostComponent', () => {
  let component: NegativeBoostComponent;
  let fixture: ComponentFixture<NegativeBoostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NegativeBoostComponent]
    });
    fixture = TestBed.createComponent(NegativeBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
