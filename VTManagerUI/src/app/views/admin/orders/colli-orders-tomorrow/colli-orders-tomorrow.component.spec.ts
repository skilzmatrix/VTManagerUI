import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColliOrdersTomorrowComponent } from './colli-orders-tomorrow.component';

describe('ColliOrdersTomorrowComponent', () => {
  let component: ColliOrdersTomorrowComponent;
  let fixture: ComponentFixture<ColliOrdersTomorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColliOrdersTomorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColliOrdersTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
