import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequentialComponent } from './sequential.component';

describe('SequentialComponent', () => {
  let component: SequentialComponent;
  let fixture: ComponentFixture<SequentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SequentialComponent]
    });
    fixture = TestBed.createComponent(SequentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
