import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoHeaderComponent } from './uno-header.component';

describe('UnoHeaderComponent', () => {
  let component: UnoHeaderComponent;
  let fixture: ComponentFixture<UnoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
