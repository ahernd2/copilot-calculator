import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedModifiedComponent } from './accepted-modified.component';

describe('AcceptedModifiedComponent', () => {
  let component: AcceptedModifiedComponent;
  let fixture: ComponentFixture<AcceptedModifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedModifiedComponent]
    });
    fixture = TestBed.createComponent(AcceptedModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
