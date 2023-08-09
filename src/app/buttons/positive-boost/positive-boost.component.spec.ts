import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveBoostComponent } from './positive-boost.component';

describe('PositiveBoostComponent', () => {
  let component: PositiveBoostComponent;
  let fixture: ComponentFixture<PositiveBoostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositiveBoostComponent]
    });
    fixture = TestBed.createComponent(PositiveBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
