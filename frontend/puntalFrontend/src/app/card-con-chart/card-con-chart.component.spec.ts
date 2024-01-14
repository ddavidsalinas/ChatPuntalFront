import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConChartComponent } from './card-con-chart.component';

describe('CardConChartComponent', () => {
  let component: CardConChartComponent;
  let fixture: ComponentFixture<CardConChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardConChartComponent]
    });
    fixture = TestBed.createComponent(CardConChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
