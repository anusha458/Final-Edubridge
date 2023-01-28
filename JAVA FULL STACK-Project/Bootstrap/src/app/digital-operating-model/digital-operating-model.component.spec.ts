import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOperatingModelComponent } from './digital-operating-model.component';

describe('DigitalOperatingModelComponent', () => {
  let component: DigitalOperatingModelComponent;
  let fixture: ComponentFixture<DigitalOperatingModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalOperatingModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalOperatingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
