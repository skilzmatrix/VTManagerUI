import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMarginFranchiseDetailsComponent } from './price-margin-franchise-details.component';

describe('PriceMarginFranchiseDetailsComponent', () => {
  let component: PriceMarginFranchiseDetailsComponent;
  let fixture: ComponentFixture<PriceMarginFranchiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceMarginFranchiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceMarginFranchiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
