import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsInvitationsFranchiseComponent } from './edit-products-invitations-franchise.component';

describe('EditProductsInvitationsFranchiseComponent', () => {
  let component: EditProductsInvitationsFranchiseComponent;
  let fixture: ComponentFixture<EditProductsInvitationsFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductsInvitationsFranchiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductsInvitationsFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
