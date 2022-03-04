import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedSuppliersComponent } from './deleted-suppliers.component';

describe('DeletedSuppliersComponent', () => {
  let component: DeletedSuppliersComponent;
  let fixture: ComponentFixture<DeletedSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
