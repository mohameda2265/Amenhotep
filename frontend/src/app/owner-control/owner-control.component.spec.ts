import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerControlComponent } from './owner-control.component';

describe('OwnerControlComponent', () => {
  let component: OwnerControlComponent;
  let fixture: ComponentFixture<OwnerControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
