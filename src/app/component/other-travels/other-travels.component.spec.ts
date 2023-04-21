import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTravelsComponent } from './other-travels.component';

describe('OtherTravelsComponent', () => {
  let component: OtherTravelsComponent;
  let fixture: ComponentFixture<OtherTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
