import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovilComponent } from './card-movil.component';

describe('CardMovilComponent', () => {
  let component: CardMovilComponent;
  let fixture: ComponentFixture<CardMovilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMovilComponent]
    });
    fixture = TestBed.createComponent(CardMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
