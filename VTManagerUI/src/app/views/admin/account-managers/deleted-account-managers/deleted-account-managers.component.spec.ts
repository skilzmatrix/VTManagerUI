import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedAccountManagersComponent } from './deleted-account-managers.component';

describe('DeletedAccountManagersComponent', () => {
  let component: DeletedAccountManagersComponent;
  let fixture: ComponentFixture<DeletedAccountManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedAccountManagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedAccountManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
