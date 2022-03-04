import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedFranchisersComponent } from './deleted-franchisers.component';

describe('DeletedFranchisersComponent', () => {
  let component: DeletedFranchisersComponent;
  let fixture: ComponentFixture<DeletedFranchisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedFranchisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedFranchisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
