import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTagComponent } from './first-tag.component';

describe('FirstTagComponent', () => {
  let component: FirstTagComponent;
  let fixture: ComponentFixture<FirstTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
