import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseSpecificProductsComponent } from './franchise-specific-products.component';

describe('FranchiseSpecificProductsComponent', () => {
  let component: FranchiseSpecificProductsComponent;
  let fixture: ComponentFixture<FranchiseSpecificProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseSpecificProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseSpecificProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
