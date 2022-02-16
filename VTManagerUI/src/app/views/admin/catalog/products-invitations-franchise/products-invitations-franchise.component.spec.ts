import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInvitationsFranchiseComponent } from './products-invitations-franchise.component';

describe('ProductsInvitationsFranchiseComponent', () => {
  let component: ProductsInvitationsFranchiseComponent;
  let fixture: ComponentFixture<ProductsInvitationsFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInvitationsFranchiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInvitationsFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
