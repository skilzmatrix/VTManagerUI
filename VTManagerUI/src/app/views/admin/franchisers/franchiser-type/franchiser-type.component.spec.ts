import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiserTypeComponent } from './franchiser-type.component';

describe('FranchiserTypeComponent', () => {
  let component: FranchiserTypeComponent;
  let fixture: ComponentFixture<FranchiserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
