import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaMovilComponent } from './plantilla-movil.component';

describe('PlantillaMovilComponent', () => {
  let component: PlantillaMovilComponent;
  let fixture: ComponentFixture<PlantillaMovilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantillaMovilComponent]
    });
    fixture = TestBed.createComponent(PlantillaMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
