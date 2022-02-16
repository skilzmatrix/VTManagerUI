import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesDetailsComponent } from './product-types-details.component';

describe('ProductTypesDetailsComponent', () => {
  let component: ProductTypesDetailsComponent;
  let fixture: ComponentFixture<ProductTypesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTypesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
