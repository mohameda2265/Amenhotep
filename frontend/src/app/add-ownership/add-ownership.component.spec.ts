import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwnershipComponent } from './add-ownership.component';

describe('AddOwnershipComponent', () => {
  let component: AddOwnershipComponent;
  let fixture: ComponentFixture<AddOwnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOwnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
