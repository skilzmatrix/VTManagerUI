import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisersComponent } from './franchisers.component';

describe('FranchisersComponent', () => {
  let component: FranchisersComponent;
  let fixture: ComponentFixture<FranchisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
