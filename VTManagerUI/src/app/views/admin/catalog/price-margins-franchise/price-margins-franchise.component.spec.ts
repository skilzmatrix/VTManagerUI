import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMarginsFranchiseComponent } from './price-margins-franchise.component';

describe('PriceMarginsFranchiseComponent', () => {
  let component: PriceMarginsFranchiseComponent;
  let fixture: ComponentFixture<PriceMarginsFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceMarginsFranchiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceMarginsFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
