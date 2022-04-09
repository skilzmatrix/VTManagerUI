import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierOrderDetailsComponent } from './suplier-order-details.component';

describe('SuplierOrderDetailsComponent', () => {
  let component: SuplierOrderDetailsComponent;
  let fixture: ComponentFixture<SuplierOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
