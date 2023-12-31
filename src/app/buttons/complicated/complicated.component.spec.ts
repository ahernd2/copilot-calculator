import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicatedComponent } from './complicated.component';

describe('ComplicatedComponent', () => {
  let component: ComplicatedComponent;
  let fixture: ComponentFixture<ComplicatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplicatedComponent]
    });
    fixture = TestBed.createComponent(ComplicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
