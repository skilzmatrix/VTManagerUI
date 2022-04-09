import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvContentComponent } from './csv-content.component';

describe('CsvContentComponent', () => {
  let component: CsvContentComponent;
  let fixture: ComponentFixture<CsvContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
