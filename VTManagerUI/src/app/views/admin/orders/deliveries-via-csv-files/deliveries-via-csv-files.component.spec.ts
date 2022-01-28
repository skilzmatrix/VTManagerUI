import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesViaCsvFilesComponent } from './deliveries-via-csv-files.component';

describe('DeliveriesViaCsvFilesComponent', () => {
  let component: DeliveriesViaCsvFilesComponent;
  let fixture: ComponentFixture<DeliveriesViaCsvFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveriesViaCsvFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesViaCsvFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
