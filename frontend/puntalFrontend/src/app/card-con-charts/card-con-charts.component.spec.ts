import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConChartsComponent } from './card-con-charts.component';

describe('CardConChartsComponent', () => {
  let component: CardConChartsComponent;
  let fixture: ComponentFixture<CardConChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardConChartsComponent]
    });
    fixture = TestBed.createComponent(CardConChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
