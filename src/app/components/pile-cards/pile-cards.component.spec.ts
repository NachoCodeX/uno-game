import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PileCardsComponent } from './pile-cards.component';

describe('PileCardsComponent', () => {
  let component: PileCardsComponent;
  let fixture: ComponentFixture<PileCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PileCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PileCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
