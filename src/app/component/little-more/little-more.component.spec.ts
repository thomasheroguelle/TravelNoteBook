import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleMoreComponent } from './little-more.component';

describe('LittleMoreComponent', () => {
  let component: LittleMoreComponent;
  let fixture: ComponentFixture<LittleMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
