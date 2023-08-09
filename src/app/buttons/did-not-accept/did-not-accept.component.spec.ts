import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidNotAcceptComponent } from './did-not-accept.component';

describe('DidNotAcceptComponent', () => {
  let component: DidNotAcceptComponent;
  let fixture: ComponentFixture<DidNotAcceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DidNotAcceptComponent]
    });
    fixture = TestBed.createComponent(DidNotAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
