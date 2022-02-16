import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpecificProductsComponent } from './customer-specific-products.component';

describe('CustomerSpecificProductsComponent', () => {
  let component: CustomerSpecificProductsComponent;
  let fixture: ComponentFixture<CustomerSpecificProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSpecificProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSpecificProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
