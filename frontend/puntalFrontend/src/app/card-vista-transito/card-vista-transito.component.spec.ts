import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVistaTransitoComponent } from './card-vista-transito.component';

describe('CardVistaTransitoComponent', () => {
  let component: CardVistaTransitoComponent;
  let fixture: ComponentFixture<CardVistaTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVistaTransitoComponent]
    });
    fixture = TestBed.createComponent(CardVistaTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
